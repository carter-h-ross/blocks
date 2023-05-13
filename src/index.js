/* 3d model credits:

chess board: "Chess Board" (https://skfb.ly/6SAZ9) by danielpaulse is licensed under Creative Commons Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/).

*/

// function to help with radians
function degToRad(degrees) {
    var radians = degrees * (Math.PI / 180);
    return radians;
}
  
function copy2DArray(array) {
    return array.map(innerArray => innerArray.slice());
}
  
/*--------------------------------------- firebase ----------------------------------------*/ 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
} from "firebase/firestore";
/* import { 
    getDatabase,
    ref, 
    onValue, 
    set,
    get,
    push
} from "firebase/database"; */
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
  
const firebaseConfig = {
    apiKey: "AIzaSyBGWZ5uogW9ykaabWlc-1aMQny-pDOVL7w",
    authDomain: "carterross-dev-blocks.firebaseapp.com",
    projectId: "carterross-dev-blocks",
    storageBucket: "carterross-dev-blocks.appspot.com",
    messagingSenderId: "312465241816",
    appId: "1:312465241816:web:ffbdfc25ce1d96394b09ad",
    measurementId: "G-H5408W8G81"
};
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const df = getFirestore(app);
const auth = getAuth();
var userId = null;
var opponentName = "carter2"
var username = null;
const mainMenuDiv = document.querySelector(".home-menu");
    
// sign up and login
var username;
var rememberMe = true;
const signupForm = document.querySelector('.signup-login')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = signupForm.email.value
    const password = signupForm.password.value
    username = signupForm.username.value
  
    if (username != null && username !== "must enter when creating account") {
        createUserWithEmailAndPassword(auth, email, password)
            .then(cred => {
                signupForm.reset()
                userId = cred.user.uid;
                })
            .catch(err => {
                console.log(err.message)
            })
    } else {
        console.log("username cannot be empty when signing up");
        signupForm.username.value = "must enter when creating account";
    }
})
  
// logging in and out

if (localStorage.getItem("savedEmail") != null && localStorage.getItem("savedPassword") != null && localStorage.getItem("savedUsername") != null) {
    document.querySelector(".email-input").value = localStorage.getItem("savedEmail");
    document.querySelector(".password-input").value = localStorage.getItem("savedPassword");
    document.querySelector(".username-input").value = localStorage.getItem("savedUsername");
}

/*
const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            console.log('user signed out')
            if (localStorage.getItem("savedEmail") != null && localStorage.getItem("savedPassword") != null && localStorage.getItem("savedUsername") != null) {
                document.querySelector(".email-input").value = localStorage.getItem("savedEmail");
                document.querySelector(".password-input").value = localStorage.getItem("savedPassword");
                document.querySelector(".username-input").value = localStorage.getItem("savedUsername");
            }
        })
        .catch(err => {
            console.log(err.message)
        })
})
*/

const loginForm = document.querySelector('.signup-login')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
  
    const email = loginForm.email.value
    const password = loginForm.password.value
    const username = loginForm.username.value
  
    if (rememberMe) {
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
        localStorage.setItem("savedUsername", username);
    } else {
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("savedPassword");
        localStorage.removeItem("savedUsername");
    }
    
    signInWithEmailAndPassword(auth, email, password)
        .then(cred => {
            loginForm.reset()
            userId = cred.user.uid;
            goToIngameMenu();
         })
        .catch(err => {
            console.log(err.message)
        })
}) 
  
/*-------------------------------------- three js section ---------------------------------------*/
  
// threejs imports
import * as THREE from 'three';
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const gltfLoader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
});
  
// starting camera position
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 20;
camera.position.y = 30;
camera.position.x = 20;
camera.lookAt(new THREE.Vector3(0, 0, 0));
  
// orbit controls
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();
  
class Block {
    constructor(x,y,z,mesh,piece) {
        this.mesh = mesh;
        this.x = r;
        this.y = y;
        this.z = z;
        this.piece = piece;
    }
    removePiece() {
        scene.remove(this.mesh);
    }
}
  
// board location planes for raycast and game logic
var prevClickedMesh;
  
function onCanvasClick(event) {
    const canvasBounds = renderer.domElement.getBoundingClientRect();
    const mouse = new THREE.Vector2();
    mouse.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
    mouse.y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true); // Set the second parameter to true to check all descendants of an object
  
    if (intersects.length > 0) {
        const clickedMesh = intersects[0].object;
        let targetObject = clickedMesh;
        while (!targetObject.userData.index && targetObject.parent) {
            targetObject = targetObject.parent;
        }
        const clickedMeshIndex = targetObject.userData.index;
        if (clickedMeshIndex) {
            const { r, c } = clickedMeshIndex;
            prevClickedMesh = targetObject;
        }
    }
}
  
// ambient scene light
/*
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight);
*/

function animate() {
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
/* 3d model credits:

*/

let maxHeight = 64;
let worldSize = 160;
const flatWorld = `${160*160}b${160*160*3}s${160*160*3}d${160*160}g${160*160*56}a`;
const demoWorld = `
   25600b76800s76800d76g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151
   g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9
   d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d1
   51g9d151g9d151g9d75g1440d76g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d15
   1g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g
   9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d151g9d
   151g9d151g9d151g9d75g1610a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1o
   l9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a41ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol
   39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol69a1ol9a1ol9a1ol9a1ol9a1ol9a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1
   ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol1
   19a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a1ol119a1ol39a
   1ol119a1ol39a1ol119a41ol11109a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol
   9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a41gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119
   a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl69a1ol9a1ol9a1ol9a1ol9a1ol9a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl1
   19a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a
   1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1g
   l39a1gl119a1gl39a1gl119a41gl11109a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9
   a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a41gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1g
   l119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl69a1ol9a1ol9a1ol9a1ol9a1ol9a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a
   1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1g
   l39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl11
   9a1gl39a1gl119a1gl39a1gl119a41gl11109a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a
   1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1539a1ol9a1ol9a1ol9a1ol9a1ol9a41gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl3
   9a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl69a1ol9a1ol9a1ol9a1ol9a1ol9a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1g
   l39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl11
   9a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1gl119a1gl39a1
   gl119a1gl39a1gl119a1gl39a1gl119a41gl10837a5ole155a5ole107a1ol9a1ol9a1ol9a1ol9a1ol7a2ole1ol2ole7a1ol147a5ole155a5ole915a5ole45a5ole105a5ole45a5ole97a1ol7
   a2ole1ol2ole7a1ol9a1ol9a1ol9a1ol7a2ole1ol2ole105a5ole45a5ole105a5ole45a5ole1217a1ol9a1ol9a1ol9a1ol9a1ol9a1ol9a1ol1217a5ole45a5ole105a5ole45a5ole105a2ole
   1ol2ole7a1ol9a1ol9a1ol9a1ol7a2ole1ol2ole7a1ol97a5ole45a5ole105a5ole45a5ole935a5ole15a5ole5a5ole125a5ole15a5ole5a5ole97a1ol9a1ol9a1ol7a2ole1ol2ole7a1ol7a
   2ole1ol2ole5a2ole1ol2ole125a5ole15a5ole5a5ole125a5ole15a5ole5a5ole895a5ole15a5ole135a5ole15a5ole135a2ole1ol2ole7a1ol7a2ole1ol2ole7a1ol9a1ol9a41sb67a5ole
   15a5ole27a41sb67a5ole15a5ole27a41sb119a41sb119a41sb119a41sb119a41sb119a41sb67a5ole47a41sb67a5ole47a41sb67a2ole1ol2ole7a1ol9a1ol9a1ol9a1ol9a41sb67a5ole47
   a41sb67a5ole47a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a4
   1sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb119a41sb10787a5ole25a5ole5a5ole5a5ole5a5ole95a5ole25a5ole5a5ole5a5ole
   5a5ole95a2ole1ol2ole7a1ol9a1ol7a2ole1ol2ole5a2ole1ol2ole5a2ole1a2ole5a2ole1ol2ole95a5ole25a5ole5a5ole5a5ole5a5ole95a5ole25a5ole5a5ole5a5ole5a5ole905a5ol
   e5a5ole5a5ole5a5ole15a5ole105a5ole5a5ole5a5ole5a5ole15a5ole97a1ol7a2ole1a2ole5a2ole1ol2ole5a2ole1ol2ole5a2ole1ol2ole7a1ol7a2ole1a2ole105a5ole5a5ole5a5ol
   e5a5ole15a5ole105a5ole5a5ole5a5ole5a5ole15a5ole905a5ole25a5ole15a5ole105a5ole25a5ole15a5ole97a1ol7a2ole1ol2ole7a1ol9a1ol7a2ole1ol2ole7a1ol7a2ole1ol2ole1
   05a5ole25a5ole15a5ole105a5ole25a5ole15a5ole895a5ole25a5ole5a5ole5a5ole105a5ole25a5ole5a5ole5a5ole105a2ole1a2ole7a1ol9a1ol7a2ole1ol2ole5a2ole1ol2ole5a2ol
   e1a2ole7a1ol97a5ole25a5ole5a5ole5a5ole105a5ole25a5ole5a5ole5a5ole905a5ole25a5ole5a5ole5a5ole5a5ole95a5ole25a5ole5a5ole5a5ole5a5ole95a2ole1ol2ole7a1ol9a1
   ol7a2ole1a2ole5a2ole1ol2ole5a2ole1a2ole5a2ole1a2ole95a5ole25a5ole5a5ole5a5ole5a5ole95a5ole25a5ole5a5ole5a5ole5a5ole895a5ole5a5ole5a5ole5a5ole5a5ole115a5
   ole5a5ole5a5ole5a5ole5a5ole115a2ole1a2ole5a2ole1ol2ole5a2ole1a2ole5a2ole1ol2ole5a2ole1ol2ole115a5ole5a5ole5a5ole5a5ole5a5ole115a5ole5a5ole5a5ole5a5ole5a
   5ole492a31sb129a31sb129a31sb72a5ole5a5ole15a5ole22a31sb72a5ole5a5ole15a5ole22a31sb72a2ole1a2ole5a2ole1ol2ole7a1ol7a2ole1ol2ole7a1ol14a31sb72a5ole5a5ole1
   5a5ole22a31sb72a5ole5a5ole15a5ole22a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb
   129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb129a31sb11592a5ole5a5ole5a5ole5a5ole5a5ole15a5ole95a5ole5a5ole5a5ole5a5ole5a5ole6a3ole6a
   5ole95a2ole1a2ole5a2ole1ol2ole5a2ole1ol2ole5a2ole1a2ole5a2ole1a2ole6a3ole6a2ole1a2ole95a5ole5a5ole5a5ole5a5ole5a5ole6a3ole6a5ole95a5ole5a5ole5a5ole5a5ol
   e5a5ole15a5ole895a5ole15a5ole5a5ole5a5ole5a5ole105a5ole6a3ole6a5ole5a5ole5a5ole5a5ole6a3ole96a2ole1ol2ole6a3ole6a2ole1a2ole5a2ole1a2ole5a2ole1a2ole5a2ol
   e1ol2ole6a3ole96a5ole6a3ole6a5ole5a5ole5a5ole5a5ole6a3ole96a5ole15a5ole5a5ole5a5ole5a5ole905a5ole5a5ole5a5ole5a5ole5a5ole5a5ole5a5ole95a5ole5a5ole5a5ole
   5a5ole5a5ole5a5ole5a5ole95a2ole1ol2ole5a2ole1a2ole5a2ole1ol2ole5a2ole1ol2ole5a2ole1a2ole5a2ole1ol2ole5a2ole1a2ole95a5ole5a5ole5a5ole5a5ole5a5ole5a5ole5a
   5ole95a5ole5a5ole5a5ole5a5ole5a5ole5a5ole5a5ole905a5ole5a5ole5a5ole5a5ole15a5ole96a3ole6a5ole5a5ole5a5ole5a5ole6a3ole6a5ole96a3ole6a2ole1ol2ole5a2ole1ol
   2ole5a2ole1a2ole5a2ole1a2ole6a3ole6a2ole1ol2ole96a3ole6a5ole5a5ole5a5ole5a5ole6a3ole6a5ole105a5ole5a5ole5a5ole5a5ole15a5ole895a5ole5a5ole5a5ole15a5ole11
   5a5ole5a5ole5a5ole6a3ole6a5ole6a3ole7a3ole96a2ole1a2ole5a2ole1ol2ole5a2ole1ol2ole6a3ole6a2ole1a2ole6a3ole7a3ole96a5ole5a5ole5a5ole6a3ole6a5ole6a3ole7a3o
   le96a5ole5a5ole5a5ole15a5ole925a5ole15a5ole5a5ole116a3ole6a5ole6a3ole6a5ole5a5ole116a3ole6a2ole1a2ole6a3ole6a2ole1a2ole5a2ole1a2ole116a3ole6a5ole6a3ole6
   a5ole5a5ole125a5ole15a5ole5a5ole925a5ole5a5ole5a5ole5a5ole116a3ole6a5ole5a5ole5a5ole5a5ole116a3ole6a2ole1a2ole5a2ole1ol2ole5a2ole1a2ole5a2ole1ol2ole17a2
   1sb78a3ole6a5ole5a5ole5a5ole5a5ole17a21sb87a5ole5a5ole5a5ole5a5ole17a21sb139a21sb139a21sb139a21sb139a21sb139a21sb139a21sb139a21sb139a21sb139a21sb139a21s
   b139a21sb139a21sb139a21sb139a21sb139a21sb139a21sb139a21sb139a21sb12407a5ole5a5ole136a3ole6a5ole5a5ole6a3ole7a3ole17a3ole97a3ole6a2ole1a2ole5a2ole1a2ole6
   a3ole7a3ole17a3ole97a3ole6a5ole5a5ole6a3ole7a3ole17a3ole106a5ole5a5ole935a5ole45a5ole105a5ole16a3ole7a3ole7a3ole6a5ole105a2ole1a2ole16a3ole7a3ole7a3ole6
   a2ole1a2ole105a5ole16a3ole7a3ole7a3ole6a5ole105a5ole45a5ole905a5ole15a5ole5a5ole15a5ole105a5ole6a3ole6a5ole5a5ole6a3ole6a5ole6a3ole96a2ole1a2ole6a3ole6a
   2ole1a2ole5a2ole1a2ole6a3ole6a2ole1a2ole6a3ole96a5ole6a3ole6a5ole5a5ole6a3ole6a5ole6a3ole96a5ole15a5ole5a5ole15a5ole915a5ole5a5ole35a5ole105a5ole5a5ole6
   a3ole7a3ole16a5ole105a2ole1a2ole5a2ole1a2ole6a3ole7a3ole16a2ole1a2ole105a5ole5a5ole6a3ole7a3ole16a5ole105a5ole5a5ole35a5ole905a5ole5a5ole136a3ole6a5ole5
   a5ole16a3ole117a3ole6a2ole1a2ole5a2ole1a2ole16a3ole117a3ole6a5ole5a5ole16a3ole126a5ole5a5ole1106a3ole17a3ole7a3ole127a3ole17a3ole7a3ole127a3ole17a3ole7a
   3ole1096a5ole15a5ole126a3ole6a5ole6a3ole6a5ole126a3ole6a2ole1a2ole6a3ole6a2ole1a2ole126a3ole6a5ole6a3ole6a5ole135a5ole15a5ole15486a3ole7a3ole147a3ole7a3
   ole147a3ole7a3ole1257a3ole47a3ole107a3ole47a3ole107a3ole47a3ole1227a3ole17a3ole7a3ole17a3ole107a3ole17a3ole7a3ole17a3ole107a3ole17a3ole7a3ole17a3ole1237
   a3ole7a3ole37a3ole107a3ole7a3ole37a3ole107a3ole7a3ole37a3ole1227a3ole7a3ole147a3ole7a3ole147a3ole7a3ole2877a3ole17a3ole137a3ole17a3ole137a3ole17a3ole121
   7388a
` // demo world that shocases all available blocks

// function to help with radians
function degToRad(degrees) {
    var radians = degrees * (Math.PI / 180);
    return radians;
}

function randomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function copy2DArray(array) {
    return array.map(innerArray => innerArray.slice());
}

// debugging world in javascript console
function debugWorld(worldArray) {
    for (let y = 0; y < maxHeight; y++) {
        let level = ""
        for (let x = 0; x < 10; x++) {
            for (let z = 0; z < 10; z++) {
                level += worldArray[x][y][z]
            }
            level += "\n"
        }
        console.log(`level ${y}: \n\n${level}`)
    }
    for (let y = 0; y < maxHeight; y++) {
        for (let x = 0; x < worldSize; x++) {
            for (let z = 0; z < worldSize; z++) {
                if (blocks[worldArray[x][y][z]] === undefined) {
                    console.error(`${worldArray[x][y][z]} is not a block type`)
                }
            }
        }
    }
}

function placeTree(x,y,z,type) {
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    let logs = [];
    let leaves = [];
    if (type == "oak") {
        let variation = randomInt(5,7);
        switch (variation) {
            case 5: 
                logs = [[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0]];
                leaves = [
                    [-1,6,-1],[-1,6,0],[-1,6,1],
                    [0,6,-1], [0,6,0], [0,6,1],
                    [1,6,-1], [1,6,0], [1,6,1],
                
                    [-2,5,-2],[-2,5,-1], [-2,5,0],[-2,5,1],[-2,5,2],
                    [-1,5,-2],[-1,5,-1],[-1,5,0],[-1,5,1],[-1,5,2],
                    [0,5,-2], [0,5,-1],          [0,5,1], [0,5,2],
                    [1,5,-2], [1,5,-1], [1,5,0], [1,5,1], [1,5,2],
                    [2,5,-2], [2,5,-1], [2,5,0], [2,5,1], [2,5,2],
                
                    [-2,4,-2],[-2,4,-1], [-2,4,0],[-2,4,1],[-2,4,2],
                    [-1,4,-2],[-1,4,-1],[-1,4,0],[-1,4,1],[-1,4,2],
                    [0,4,-2], [0,4,-1],          [0,4,1], [0,4,2],
                    [1,4,-2], [1,4,-1], [1,4,0], [1,4,1], [1,4,2],
                    [2,4,-2], [2,4,-1], [2,4,0], [2,4,1], [2,4,2],
                ];
                break;
            case 6: 
                logs = [[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[0,5,0]];
                leaves = [
                    [-1,7,-1],[-1,7,0],[-1,7,1],
                    [0,7,-1], [0,7,0], [0,7,1],
                    [1,7,-1], [1,7,0], [1,7,1],
                
                    [-2,6,-2],[-2,6,-1], [-2,6,0],[-2,6,1],[-2,6,2],
                    [-1,6,-2],[-1,6,-1],[-1,6,0],[-1,6,1],[-1,6,2],
                    [0,6,-2], [0,6,-1],          [0,6,1], [0,6,2],
                    [1,6,-2], [1,6,-1], [1,6,0], [1,6,1], [1,6,2],
                    [2,6,-2], [2,6,-1], [2,6,0], [2,6,1], [2,6,2],
                
                    [-2,5,-2],[-2,5,-1], [-2,5,0],[-2,5,1],[-2,5,2],
                    [-1,5,-2],[-1,5,-1],[-1,5,0],[-1,5,1],[-1,5,2],
                    [0,5,-2], [0,5,-1],          [0,5,1], [0,5,2],
                    [1,5,-2], [1,5,-1], [1,5,0], [1,5,1], [1,5,2],
                    [2,5,-2], [2,5,-1], [2,5,0], [2,5,1], [2,5,2],
                ];
                break;
            case 7: 
                logs = [[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0]];
                leaves = [
                    [-1,8,-1],[-1,8,0],[-1,8,1],
                    [0,8,-1], [0,8,0], [0,8,1],
                    [1,8,-1], [1,8,0], [1,8,1],
                
                    [-2,7,-2],[-2,7,-1], [-2,7,0],[-2,7,1],[-2,7,2],
                    [-1,7,-2],[-1,7,-1],[-1,7,0],[-1,7,1],[-1,7,2],
                    [0,7,-2], [0,7,-1],          [0,7,1], [0,7,2],
                    [1,7,-2], [1,7,-1], [1,7,0], [1,7,1], [1,7,2],
                    [2,7,-2], [2,7,-1], [2,7,0], [2,7,1], [2,7,2],
                
                    [-2,6,-2],[-2,6,-1], [-2,6,0],[-2,6,1],[-2,6,2],
                    [-1,6,-2],[-1,6,-1],[-1,6,0],[-1,6,1],[-1,6,2],
                    [0,6,-2], [0,6,-1],          [0,6,1], [0,6,2],
                    [1,6,-2], [1,6,-1], [1,6,0], [1,6,1], [1,6,2],
                    [2,6,-2], [2,6,-1], [2,6,0], [2,6,1], [2,6,2],
                ];
                break;
        }
        for (let i = 0; i < logs.length; i++) {
            world[x+logs[i][0]][y+logs[i][1]][z+logs[i][2]] = "ol";    
        }
        for (let i = 0; i < leaves.length; i++) {
            world[x+leaves[i][0]][y+leaves[i][1]][z+leaves[i][2]] = "ole";
        }
    } else {
        console.error("invalid tree type: " + type);
    }
    for (let i = Math.floor(y/16); i < Math.round(maxHeight/16); i++) {
        loadChunk(Math.floor(x/16),i,Math.floor(z/16));
    }
    loadChunk(Math.floor(x/16)-1,Math.floor(y/16),Math.floor(z/16)-1);
    loadChunk(Math.floor(x/16)-1,Math.floor(y/16),Math.floor(z/16));
    loadChunk(Math.floor(x/16)-1,Math.floor(y/16),Math.floor(z/16)+1);
    loadChunk(Math.floor(x/16),Math.floor(y/16),Math.floor(z/16)-1);
    loadChunk(Math.floor(x/16),Math.floor(y/16),Math.floor(z/16)+1);
    loadChunk(Math.floor(x/16)+1,Math.floor(y/16),Math.floor(z/16)-1);
    loadChunk(Math.floor(x/16)+1,Math.floor(y/16),Math.floor(z/16));
    loadChunk(Math.floor(x/16)+1,Math.floor(y/16),Math.floor(z/16)+1);
    loadChunk(Math.floor(x/16)-1,Math.floor(y/16)+1,Math.floor(z/16)-1);
    loadChunk(Math.floor(x/16)-1,Math.floor(y/16)+1,Math.floor(z/16));
    loadChunk(Math.floor(x/16)-1,Math.floor(y/16)+1,Math.floor(z/16)+1);
    loadChunk(Math.floor(x/16),Math.floor(y/16)+1,Math.floor(z/16)-1);
    loadChunk(Math.floor(x/16),Math.floor(y/16)+1,Math.floor(z/16)+1);
    loadChunk(Math.floor(x/16)+1,Math.floor(y/16)+1,Math.floor(z/16)-1);
    loadChunk(Math.floor(x/16)+1,Math.floor(y/16)+1,Math.floor(z/16));
    loadChunk(Math.floor(x/16)+1,Math.floor(y/16)+1,Math.floor(z/16)+1);
}

const blocks = {
    "a": "air",
    "s": "stone",
    "d": "dirt",
    "b": "bedrock",
    "g": "grass",
    "ol": "oak_log",
    "ole": "oak_leaves",
    "gl": "glass",
    "sb": "stone_brick",
}
const blockKeys = {
    "air": "a",
    "stone": "s",
    "dirt": "d",
    "bedrock": "b",
    "grass": "g",
    "oak_log": "ol",
    "oak_leaves": "ole",
    "glass": "gl",
    "stone_brick": "sb",
}
const transparentBlocks = [
    "gl",
    "a",
]

// loading blocks into a 3d array
function decodeWorldCode(input) {
    input = input.replace(/\s/g, '');
    let world = new Array(worldSize).fill().map(() => new Array(maxHeight).fill().map(() => new Array(worldSize).fill(0)));
    let x = 0;
    let y = 0;
    let z = 0;
    let index = 0;
    while (index < input.length) {
        let numberEnd = index;
        while (!isNaN(parseInt(input.charAt(numberEnd)))) {
            numberEnd++;
        }
        let count = parseInt(input.substring(index, numberEnd));
        let blockType = null; 
        if (isDigit(input[numberEnd+1])) {
            blockType = input.charAt(numberEnd);
        } else if (isDigit(input[numberEnd+2])) {
            blockType = input.charAt(numberEnd) + input.charAt(numberEnd+1);
            numberEnd++;
        }
        else {
            blockType = input.charAt(numberEnd) + input.charAt(numberEnd+1) + input.charAt(numberEnd+2);
            numberEnd++;
        }
        for (let n = 0; n < count; n++) {
            world[x][y][z] = blockType;
            z++ 
            if (z == worldSize) {
                z = 0;
                x++;
                if (x == worldSize) {
                    x = 0;
                    y++;
                    if (y == maxHeight) {
                        break;
                    }
                }
            }
        }
        index = numberEnd + 1;
    }
    return world;
}

function encodeWorldCode() {
    let output = '';
    let count = 0;
    let currentBlock = world[0][0][0];
    for (let y = 0; y < maxHeight; y++) {
        for (let x = 0; x < worldSize; x++) {
            for (let z = 0; z < worldSize; z++) {
                if (world[x][y][z] == currentBlock) {
                    count++;
                } else {
                    output += count.toString() + currentBlock;
                    currentBlock = world[x][y][z];
                    count = 1;
                }
            }
        }
    }
    output += count.toString() + currentBlock;
    return output;
}

function getNumber(string, currentIndex) {
    let result = ""
    for (let i = currentIndex; i < string.length; i++) {
        if (!(isDigit(string[i]))) {
            if (result == "") {
                console.error(
                    `trying to get a number using the getNumber function but the number is not present at the current index, 
                    the string you tried to use was ${string} and the starting index of where you looked was ${currentIndex}`
                )
            }
            return [result, i];
        }
        result += string[i]
    }
}

function isDigit(n) {
    return /^\d+$/.test(n);
}

function runCommand(command) {
    command = command.replace(/\s/g, '');
    let operation = "";
    let commandIndex = -1;

    for (let i = 0; i < command.length; i++) {
        if (command[i] == ":") {
            commandIndex = i;
            break;
        }
        operation += command[i];
    }

    if (operation == "fill") {
        let i = commandIndex + 2;
        const x1 = getNumber(command, i)[0];
        i = getNumber(command, i)[1]+1;
        const y1 = getNumber(command, i)[0];
        i = getNumber(command, i)[1]+1;
        const z1 = getNumber(command, i)[0];
        i = getNumber(command, i)[1]+2;
        const x2 = getNumber(command, i)[0];
        i = getNumber(command, i)[1]+1;
        const y2 = getNumber(command, i)[0];
        i = getNumber(command, i)[1]+1;
        const z2 = getNumber(command, i)[0];
        i = getNumber(command, i)[1]+1;
        let block = ""
        for (let j = i; j < command.length; j++) {
            block += command[j];
        }
        fillOperation(x1,y1,z1,x2,y2,z2,blockKeys[block]);
    } else if (operation == "save") {
        const saveCode = encodeWorldCode();
        console.log(`save code is: ${saveCode}`);
        commandLineInput.value = `save code: ${saveCode}`;
    } else if (operation == "load") {
        let loadCode = command.substring(commandIndex + 1);
        if (loadCode == "demo") {
            loadCode = demoWorld;
        } else if (loadCode == "flat") {
            loadCode = flatWorld;
        }
        world = decodeWorldCode(loadCode);
        enterWorld();
    } else if (operation == "debug") {
        debugWorld(world);
    } else if (operation == "tree") {
        let i = commandIndex + 2;
        let type = "";
        const x = getNumber(command, i)[0];
        i = getNumber(command, i)[1]+1;
        const y = getNumber(command, i)[0];
        i = getNumber(command, i)[1]+1;
        const z = getNumber(command, i)[0];
        i = getNumber(command, i)[1]+1;
        for (let j = i; j < command.length; j++) {
            type += command[j];
        }
        placeTree(x,y,z,type);
    } else {
        console.error(`operation '${operation}' does not exist`);
    }
}

function fillOperation(x1,y1,z1,x2,y2,z2,block) {
    x1 = parseInt(x1);
    y1 = parseInt(y1);
    z1 = parseInt(z1);
    x2 = parseInt(x2);
    y2 = parseInt(y2);
    z2 = parseInt(z2);
    console.log(`fillOperation x1: ${x1}, y1: ${y1}, z1:${z1}, x2: ${x2}, y2: ${y2}, z2: ${z2}, block: ${block}`);
    for (let x = x1; x < x2+1; x++) {
        for (let y = y1; y < y2+1; y++) {
            for (let z = z1; z < z2+1; z++) {
                world[x][y][z] = block;
            }
        }
    }
    enterWorld(world)
}


let world = decodeWorldCode(flatWorld);
debugWorld(world);

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
         })
        .catch(err => {
            console.log(err.message)
        })
}) 
  
/*-------------------------------------- three js section ---------------------------------------*/
  
// threejs imports
import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
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
  
// raycast
/*
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
*/  

// inventory and comand line elements and login page elements
const commandLineDiv = document.querySelector(".command-line");
const commandLineInput = document.querySelector(".command-line input");
commandLineInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        runCommand(commandLineInput.value);
        commandLineInput.value = '';
    }
});

const mainMenuDiv = document.querySelector(".main-menu");
mainMenuDiv.style.display = "none";

// key press event listeners
document.addEventListener('keydown', function(event) {
    if (event.key == ';') {
        if (commandLineDiv.style.display == "flex") {
            commandLineDiv.style.display = "none";
        } else {
            commandLineDiv.style.display = "flex"
        }
    }
});

// ambient scene light
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight);

const blockScale = 1;
const textureLoader = new THREE.TextureLoader();
const blockGeometry = new THREE.BoxGeometry( blockScale, blockScale, blockScale);
const startingBlockMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
let displayedBlocks = new Array(worldSize).fill().map(() => new Array(maxHeight).fill().map(() => new Array(worldSize).fill(0)));
let chunkMeshes = new Array(worldSize / 16).fill().map(() => new Array(maxHeight / 16).fill().map(() => new Array(worldSize / 16).fill(null)));

const textures = {
    "dirt": new THREE.MeshStandardMaterial({map: textureLoader.load("textures/dirt/all.webp")}),
    "stone": new THREE.MeshStandardMaterial({map: textureLoader.load("textures/stone/all.webp")}),
    "stone_brick": new THREE.MeshStandardMaterial({map: textureLoader.load("textures/stone_brick/all.webp")}),
    "bedrock": new THREE.MeshStandardMaterial({map: textureLoader.load("textures/bedrock/all.webp")}),
    "grass": [
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/grass/sides.webp")
        }),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/grass/sides.webp")
        }),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/grass/top.webp")
        }),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/grass/bottom.webp")
        }),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/grass/sides.webp")
        }),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/grass/sides.webp")
        }),
    ],
    "oak_log": [
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/oak_log/sides.webp")
        }),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/oak_log/sides.webp")
        }),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/oak_log/top.webp")
        }),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/oak_log/top.webp")
        }),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/oak_log/sides.webp")
        }),
        new THREE.MeshStandardMaterial({
            map: textureLoader.load("textures/oak_log/sides.webp")
        }),
    ],
    "oak_leaves": new THREE.MeshStandardMaterial({
        map: textureLoader.load("textures/oak_leaves/all.webp", function(texture) {
            texture.format = THREE.RGBAFormat;
        }),
        transparent: true
    }),
    "glass": new THREE.MeshStandardMaterial({
        map: textureLoader.load("textures/glass/all.webp", function(texture) {
            texture.format = THREE.RGBAFormat;
        }),
        transparent: true
    }),
}

function loadChunk(chunkX, chunkY, chunkZ) {
    if (chunkMeshes[chunkX][chunkY][chunkZ] != null) {
        for (let i = 0;i < chunkMeshes[chunkX][chunkY][chunkZ].length; i++) {
            scene.remove(chunkMeshes[chunkX][chunkY][chunkZ][i]);
        }
    }
    let currentWorldBlocks = [];
    for (let x = chunkX * 16; x < (chunkX * 16) + 16; x++) {
        for (let y = chunkY * 16; y < (chunkY * 16) + 16; y++) {
            for (let z = chunkZ * 16; z < (chunkZ * 16) + 16; z++) {
                if (world[x][y][z] != "a") {
                    if (y < maxHeight-1) {
                        if (transparentBlocks.includes(world[x][y+1][z])) { // add plane above
                            currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                            continue;
                        }
                    } else {
                        currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                        continue;
                    }
                    if (y > 0) {
                        if (transparentBlocks.includes(world[x][y-1][z])) { // add bottom plane
                            currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                            continue;
                        }
                    } else {
                        currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                        continue;
                    }
                    if (x < worldSize-1) {
                        if (transparentBlocks.includes(world[x+1][y][z])) { // add side plane x+1
                            currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                            continue;
                        }
                    } else {
                        currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                        continue;
                    }
                    if (x > 0) {
                        if (transparentBlocks.includes(world[x-1][y][z])) { // add side plane x-1
                            currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                            continue;
                        }
                    } else {
                        currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                        continue;
                    }
                    if (z < worldSize-1) {
                        if (transparentBlocks.includes(world[x][y][z+1])) { // add side plane z+1
                            currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                            continue;
                        }
                    } else {
                        currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                        continue;
                    }
                    if (z > 0) {
                        if (transparentBlocks.includes(world[x][y][z-1])) { // add side plane z-1
                            currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                            continue;
                        }
                    } else {
                        currentWorldBlocks.push([x,y,z,world[x][y][z]]);
                        continue;
                    }
                }
            }
        }
    }
    let instanceMeshesNeeded = {}
    for (let i = 0; i < currentWorldBlocks.length; i++) {
        if (!(instanceMeshesNeeded.hasOwnProperty(currentWorldBlocks[i][3]))) {
            instanceMeshesNeeded[currentWorldBlocks[i][3]] = 1;
        } else {
            instanceMeshesNeeded[currentWorldBlocks[i][3]]++;
        }
    }
    let chunkInstancedMeshes = []
    for (let block in instanceMeshesNeeded) {
        const temp = new THREE.Object3D();
        let nextInstancedMesh = new THREE.InstancedMesh(blockGeometry, textures[blocks[block]], instanceMeshesNeeded[block]);
        scene.add(nextInstancedMesh);
        
        let instanceIndex = 0; // Create a new index for each block type
        for (let i = 0; i < currentWorldBlocks.length; i++) {
            if (currentWorldBlocks[i][3] == block) {
                temp.position.set(currentWorldBlocks[i][0]*blockScale, currentWorldBlocks[i][1]*blockScale, currentWorldBlocks[i][2]*blockScale);
                temp.updateMatrix();
                nextInstancedMesh.setMatrixAt(instanceIndex, temp.matrix); // Use the new index here
                instanceIndex++; // Increment the index for each instance
            }
        }
        chunkInstancedMeshes.push(nextInstancedMesh);
    } 
    chunkMeshes[chunkX][chunkY][chunkZ] = (chunkInstancedMeshes)   
}

let counter = 0;
function enterWorld() {
    for (let x = 0;x < worldSize / 16;x++) {
        for (let y = 0;y < maxHeight / 16;y++) {
            for (let z = 0;z < worldSize / 16;z++) {
                loadChunk(x,y,z);
                counter++;
                //console.log(`percent loaded: ${counter/((worldSize / 16)**2 * (maxHeight / 16)) * 100}%`);
            }
        }
    }
}

enterWorld();

// world background 
let background_texture = new THREE.TextureLoader().load("sky.png");
scene.background = background_texture;

function animate() {
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
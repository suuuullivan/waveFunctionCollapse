const tiles = [];

const grid = [];

const DIM = 2;

const BLANK=0;
const UP= 1;
const RIGHT = 2;
const DOWN = 3;
const LEFT = 4;


function preload(){
    tiles[0] = loadImage("IMG/blank.png");
    tiles[1] = loadImage("IMG/up.png");
    tiles[2] = loadImage("IMG/right.png");
    tiles[3] = loadImage("IMG/down.png");
    tiles[4] = loadImage("IMG/left.png");
} 

function setup(){
    createCanvas(500,500);

    for(let i=0; i < DIM*DIM; i++){
        grid[i] = {
            collapsed:false,
            options: [BLANK,UP,RIGHT,DOWN,LEFT],

        };
    }

}

function draw(){
    background(0);

    const gridCopy = grid.slice();
    gridCopy.sort((a,b)=>{
        return a.options.length - b.options.length;
    });

  

    let len = gridCopy[0].options.length;
    let stopIndex = 0;
    for(let i = 1; i < gridCopy.length; i++){
        if(gridCopy[i].options.length > len){
            stopIndex = i;
            break;
        }
    }

    if(stopIndex>0)
        gridCopy.splice(stopIndex);
    const cell = random(gridCopy);
    cell.collapsed = true;
    const pick = random(cell.options);
    cell.options = [pick];

    const w = width/DIM;
    const h = height/DIM;
    for(let j = 0; j < DIM; j++){
        for(let i = 0; i < DIM; i++){
            let cell = grid[i+j*DIM];
            if(cell.collapsed){
                let index = cell.options[0];
                image(tiles[index], i*w , j*h , w, h );
            }else{
                fill(0);
                stroke(255);
                rect(i*w,j*h,w,h);
            }
        }
    }

    const nextTiles = [];
    for(let j = 0; j < DIM; j++){
        for(let i =0; i < DIM; i++){
            let index = i+j*DIM;
            if(tiles[index].collapsed){
                nextTiles[index] = tiles[index];
            }else{
               let options = [];
               // Look up

               // Look right
               // Look down
               // Look left
            }
        }
    }

    noLoop();
}
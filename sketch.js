let uzi;
let br;
let x = 200;
let y = 200;
let shot = 0;
let money = 0;
let x1 = 1650;
let y1 = 100;
let moving = 0;


let enemyMove = true;
let uziVert = true;
let movingLeft = false;
let movingRight = false;
let isJump = false;
let isFalling = true;
let isAttack = false;
let isSafe = false;
function preload() {
  uzi = loadImage("assets/uzi.png");
  br = loadImage("assets/pewpew.jpg");
  vert = loadImage("assets/uzishoot.png");
  money = loadImage("assets/money.png");
  demon = loadImage("assets/demon.png");
}

function setup(){
  w = windowWidth/2;
  h = windowHeight/2;
  createCanvas(windowWidth, windowHeight);
  
  
}


function draw() {
  imageMode(CORNER);
  background(br);
  moveUzi();
  fill(0);
  enemies();
  enemiesMove();
  
}

function moveUzi() {
  if (uziVert) {
    imageMode(CENTER)
    image(uzi, x, y, 350, 350);
  }
  if (movingLeft) {
    x -=3;
  }
  if (movingRight) {
    x +=3;
  }
  if (isJump) {
    y -= 10;
  }
  if (isFalling) {
    y+= 5;
  }
  if (isAttack) {
    uziAttack();
    
  }
}

function keyPressed() {
  if (key === "a") {
    movingLeft = true;
  }
  if (key === "d") {
    movingRight = true;
  }
  if (key ==="w") {
    isJump = true;
    isFalling = false;
  }
  if (key === " ") {
    isAttack = true; 
    uziVert = false;
    
  }
}

function keyReleased() {
  if (key === "a") {
    movingLeft = false;
  }
  if (key === "d") {
    movingRight = false;
  }
  if (key === "w") {
    isJump = false;
    isFalling = true;
  }
  if (key === " ") {
    isAttack = false;
    uziVert = true;
    shot = 0;
  }
}

function uziAttack() {
  imageMode(CENTER);
  image(vert, x, y, 350, 350);
  if (money = 3) {
    y -= 5;
    x += 15;

  }
  



}

function enemies() {
  if (enemyMove) {
    
    imageMode(CENTER);
    image(demon, x1, y1, 150, 150);
    image(demon, x1 - 150, y1, 150, 150);
    image(demon, x1 - 300, y1, 150, 150);
  }

  
}

function enemiesMove() {
  if (enemyMove) {
    x1 = x1 - 2;
    y1 = y1 + random(-1, 1);
  }
  if (x1 <= -50) {
    y1 = random(100, 700);
    x1 = 1650;
    
  }
 
  

  }
  //create sicko mode function in which lil uzi changes his hair every .5 second and like does something else that might look cool.

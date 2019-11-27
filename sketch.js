let uzi;
let br;
let x = 200;
let y = 200;
let shot = 0;
let money = 0;



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
    money = 0;   
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
    x += 20;
  }



}
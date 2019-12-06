let uzi;
var time = 0;
let br;
let x = 200;
let y = 200;
let shot = 0;
let money = 0;
let x1 = 1650;
let y1 = 100;
let moving = 0;

let isSicko = false;
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
  s1 = loadImage("assets/uzishoot1.png");
  s2 = loadImage("assets/uzishoot2.png");
  s3 = loadImage("assets/uzishoot3.png");
  s4 = loadImage("assets/uzishoot4.png");
  s5 = loadImage("assets/uzishoot5.png");
  s6 = loadImage("assets/uzishoot6.png");
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
  if (key === "z") {
    isSicko = true;
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
  if (key === "z") {
    isSicko = false;
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
    
  if (isSicko) {
    if (millis() > time + 200) {
      time = millis();
      image(s1, x, y, 350, 350);
        
      }
    if (millis() > time + 200) {
      time = millis();
      image(s2, x, y, 350, 350);
        
      }
    if (millis() > time + 200) {
      time = millis();
      image(s3, x, y, 350, 350);
        
      }
    if (millis() > time + 200) {
      time = millis();
      image(s4, x, y, 350, 350);
        
      }
    if (millis() > time + 200) {
      time = millis();
      image(s5, x, y, 350, 350);
        
      }
    if (millis() > time + 200) {
      time = millis();
      image(s6, x, y, 350, 350);
        
      }
    
    }
  }
 
  

  }
  //create sicko mode function in which lil uzi changes his hair every .5 second and like does something else that might look cool.

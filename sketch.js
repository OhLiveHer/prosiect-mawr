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

let gameOver = false;
let isSicko = false;
let enemyMove = true;
let uziVert = true;
let movingLeft = false;
let movingRight = false;
let isJump = false;
let isFalling = true;
let isAttack = false;
let isSafe = false;
let sicko;

function preload() {
  uzi = loadImage("assets/uzi.png");
  br = loadImage("assets/pewpew.jpg");
  vert = loadImage("assets/uzishoot.png");
  money = loadImage("assets/money.png");
  demon = loadImage("assets/demon.png");
  s11 = loadImage("assets/uzishoot1.png");
  s22 = loadImage("assets/uzishoot2.png");
  s33 = loadImage("assets/uzishoot3.png");
  s44 = loadImage("assets/uzishoot4.png");
  s55 = loadImage("assets/uzishoot5.png");
  s66 = loadImage("assets/uzishoot6.png");
}

function setup(){
  w = windowWidth/2;
  h = windowHeight/2;
  createCanvas(windowWidth, windowHeight);
  
  s1 = s11;
  s2 = s22;
  s3 = s33; 
  s4 = s44; 
  s5 = s55; 
  s6 = s66; 
  sicko = [s1, s2, s3, s4, s5, s6];
  
  
  
}


function draw() {
  imageMode(CORNER);
  background(br);
  moveUzi();
  fill(0);
  enemies();
  enemiesMove();
  uziMode();
  if (gameOver) {
    textSize(63);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);
    uziVert = false;
  }
}

function moveUzi() {
  if (uziVert) {
    imageMode(CENTER)
    image(uzi, x, y, 350, 350);
    if (y < -50 || y > 750) {
      gameOver = true;
    }
    else {
      gameOver = false;
    }
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
  if (key === "s") {
    isSicko = true;
    uziVert = false;
    
  }
  if (key === "f") {
    isFalling = false;
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
  if (key === "s") {
    isSicko = false;
    uziVert = true;
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
function uziMode() {
  if (isSicko) {
    sickoMode = shuffle(sicko);
    image(sickoMode[0], x, y, 350, 350);
    
    
 }
}

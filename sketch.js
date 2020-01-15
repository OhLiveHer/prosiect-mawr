let uzi;
var time = 0;
let br;
let cx = 200;
let cy = 200;
let shot = 0;
let money = 0;
let x1 = 1650;
let y1 = 100;
let moving = 0;
let killCount = 0;
var gif_loadImg, gif_createImg;
let fade = 255;
let moveCounter = 3;
let moveCounter2 = 1;
let tiles;
let spike, empty;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;


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
let state = "menu";
let isDead = false;
let isColliding = false;

function preload() {
  gif_loadImg = loadImage("assets/title.gif");
  gif_createImg = createImg("assets/title.gif");
  levelToLoad = "assets/levels/2.txt";
  lines = loadStrings(levelToLoad);
  
  
  mySound = loadSound("assets/444.mp3");
  uzi = loadImage("assets/uzi.png");
  br1 = loadImage("assets/br1.jpg");
  br = loadImage("assets/br.png");
  vert = loadImage("assets/uzishoot.png");
  money = loadImage("assets/money.png");
  demon = loadImage("assets/demon.png");
  s11 = loadImage("assets/uzishoot1.png");
  s22 = loadImage("assets/uzishoot2.png");
  s33 = loadImage("assets/uzishoot3.png");
  s44 = loadImage("assets/uzishoot4.png");
  s55 = loadImage("assets/uzishoot5.png");
  s66 = loadImage("assets/uzishoot6.png");
  spike = loadImage("assets/images/spike.png");
  empty = loadImage("assets/images/empty.png");
}

function setup(){
  w = windowWidth/2;
  h = windowHeight/2;
  createCanvas(1000, 750);
  
  s1 = s11;
  s2 = s22;
  s3 = s33; 
  s4 = s44; 
  s5 = s55; 
  s6 = s66; 
  sicko = [s1, s2, s3, s4, s5, s6];
  
  
  // mySound.setVolume(0.1);
  //mySound.play();
  createCanvas(1000, 750);
  
  tilesHigh = lines.length;
  tilesWide = lines[0].length;
  
  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;
  
  tiles = createEmpty2dArray(tilesWide, tilesHigh);
  
  //put values into 2d array of characters
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[x][y] = tileType;
    }
  }
}




function draw() {
  imageMode(CORNER);
  background(br);
  if (state === "menu") {
    menu();
  }
  else if (state === "game"){
    display();
    
    moveUzi();
    fill(0);
    //enemies();
    //enemiesMove();
    uziMode();
  }
  if (gameOver) {
    textSize(63);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);
    uziVert = false;
}
}

function moveUzi() {
  let rectX1 = cx - 65;
  let rectY1 = cy + 55;
  let rectW1 = 115;
  let rectH1 = 120;

  
  if (uziVert) {
    imageMode(CENTER)
    image(uzi, cx, cy, 250, 250);
    fill(0, 0, 0, 0);
    rect(rectX1, rectY1, rectW1, rectH1);
    
    if (cy < -50 || cy > 800) {
      gameOver = true;
    }
    else {
      gameOver = false;
    }
  }
  if (movingLeft) {
    cx -=3;
  }
  if (movingRight) {
    cx +=3;
  }
  if (isJump) {
    cy -= 10;
  }
  if (isFalling) {
    cy+= 5;
  }
  if (isAttack) {
    uziAttack();
    
  }
  if (isDead) {
    state === "menu";
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
    if (moveCounter > 0) {
      isAttack = true; 
      uziVert = false;
    }
  }
  if (key === "s") {
    if (moveCounter2 > 0) {
      isSicko = true;
      uziVert = false;
    }
    
    
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
    moveCounter --; 
  }
  if (key === "s") {
    isSicko = false;
    uziVert = true;
    moveCounter2 --; 
  }
}


function uziAttack() {
  imageMode(CENTER);
  image(vert, cx, cy, 250, 250);
  if (money = 3) {
    cy -= 5;
    cx += 15;
    
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
    image(sickoMode[0], cx, cy, 250, 250);
    
    
  }
}
function menu() {
  imageMode(CORNER);
  background(br1);
  menuButton();
  gif_createImg.position(width/2 - 250, height/2 - 300);
  if (state === "game") {
    removeElements();
  }
  
}   



function menuButton() {
  if (fade > 5) {
    fade -= 3;
  }
  else {
    fade += 255;
  }
  rectMode(CENTER);
  fill(255, 182, 193, 0);
  rect(width / 2, height / 2 + 150, 400, 150);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(255, 255, 255, fade);
  text("Begin", width/2, height/2 + 150);
  if (mouseIsPressed) {
    if (mouseX > width / 2 -150 && mouseX < width/2 + 150 &&
      mouseY > height/2  && mouseY < height/2 + 300) {
        state = "game";      
      }
    }
  }
  
  function display() {
    
    
    for (let y = 0; y < tilesHigh; y++) {
      for (let x = 0; x < tilesWide; x++) {
        showTile(tiles[x][y], x, y);
      }
    }
    
  }
  
  function showTile(location, x, y) {
    // let rectX1 = cx - 65;
    // let rectY1 = cy + 55;
    // let rectW1 = 115;
    // let rectH1 = 120;
    let rectX = (x * tileWidth) + 35;
    let rectY = (y * tileHeight) + 35;
    let rectW = tileWidth;
    let rectH = tileHeight;
    space = [];
    
    

  
  //   if (uziVert) {
  //     imageMode(CENTER)
  //     image(uzi, cx, cy, 250, 250);
  //     fill(0, 0, 0, 50);
  //     rect(rectX1, rectY1, rectW1, rectH1);
    
  //     if (cy < -50 || cy > 800) {
  //       gameOver = true;
  //     }
  //     else {
  //       gameOver = false;
  //     }
  //   }
  //   if (movingLeft) {
  //     cx -=3;
  //   }
  //   if (movingRight) {
  //     cx +=3;
  // }
  //   if (isJump) {
  //     cy -= 10;
  // } 
  //   if (isFalling) {
  //     cy += 5;
  //   }
  //   if (isAttack) {
  //     uziAttack();
      
  // }
  //   if (isDead) {
  //     state === "menu";
  
  if (location === "#") {
    image(spike, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
    
  } 
  else {
    rectMode(CENTER);
    fill(255, 255, 255, 0);
    rect(rectX, rectY, rectW, rectH);
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
}
      
      
      
      
}
    
  
  
  function createEmpty2dArray(cols, rows) {
    let randomGrid = [];
    for (let x = 0; x < cols; x++) {
      randomGrid.push([]);
      for (let y = 0; y < rows; y++) {
        randomGrid[x].push(0);
      }
    }
    return randomGrid;
  }

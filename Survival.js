let x;
let y;
let GM;
let numBullet = 0;
let timer = 0;
function setup() {
    createCanvas(720, 400);
    stroke(255);
    x = width/2;
    y = height/2;
  }

function draw() {
    background(51);
    circle(x,y,10);
    if(numBullet < 1){
        numBullet++;
        spawnBullet();
    }
    if(timer == 60){
        updateBullet();
    }
    else{
        timer++;
    }
  }
function keyPressed() {
  if (keyCode === UP_ARROW) {
    y -= 10;
  } 
  else if (keyCode === DOWN_ARROW) {
    y += 10;
  }
  else if (keyCode === LEFT_ARROW) {
    x -= 10;
  }
  else if (keyCode === RIGHT_ARROW) {
    x += 10;
  }
  return false;
}
function spawnBullet(){
    Bx = 0;
    By = Math.floor(Math.random()* height);
    circle(Bx,By,10);
}
function updateBullet() {
    if(By < width) {
        By++;
    }
    return;
}

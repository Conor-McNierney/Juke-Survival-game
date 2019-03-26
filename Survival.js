let x;
let Bx;
let By;
let y;
let GM;
let numBullet = 0;
let bullet;
function setup() {
    createCanvas(720, 400);
    stroke(255);
    x = width/2;
    y = height/2;
    spawnBullet();
  }

function draw() {
    background(51);
    circle(x,y,10);
    updateBullet();
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
    bullet = circle(Bx,By,10);
}
function updateBullet() {
    if(By < (width/2+1)) {
        bullet = circle(Bx++,By,10);
    }
    if(Bx == width) {
      spawnBullet();
    }
    return;
}

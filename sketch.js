var astr;
var bath, brush, eat, gym1, gym2, drink, sleep, move, bg;

function preload() {
  bg= loadImage("images/iss.png");
  brush = loadAnimation("images/brush.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  gym1 = loadAnimation("images/gym1.png","images/gym2.png");
  gym2 = loadAnimation("images/gym11.png","images/gym12.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  bath = loadAnimation("imagess/bath1.png","images/bath2.png");
  sleep = loadAnimation("images/sleep.png");
  move = loadAnimationa("images/move1.png","images/move2.png");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astr= createSprite(300,230);
  astr.addAnimation("sleeping", sleep);
  astr.scale = 0.1;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function keyControls(){
  if (keyDown("UP_ARROW")){
    astr.addAAnimation("brushing", brush);
    astr.changeAnimtion("brushing");
    astr.y = 350;
    astr.velocityX = 0;
    astr.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astr.addAAnimation("gyming", gym1, gym2);
    astr.changeAnimtion("gyming");
    astr.y = 350;
    astr.velocityX = 0;
    astr.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astr.addAAnimation("bathing", bath);
    astr.changeAnimtion("bathing");
    astr.y = 350;
    astr.velocityX = 0;
    astr.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astr.addAAnimation("eating", eat);
    astr.changeAnimtion("eating");
    astr.y = 350;
    astr.velocityX = 0;
    astr.velocityY = 0;
  }

  if (keyDown("M_KEY")){
    astr.addAAnimation("moving", move);
    astr.changeAnimtion("moving");
    astr.y = 350;
    astr.velocityX = 0;
    astr.velocityY = 0;
  }
}
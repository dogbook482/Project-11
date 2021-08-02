//path defining
var path;
var pathImage;

//runner defining
var runner;
var runnerImage;

//edges definig
var edges;

//walls defining
var wall_1;
var wall_2;

function preload()
{
  //pre-load images
  pathImage=loadAnimation("path.png");
  runnerImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup()
{
  createCanvas(400,400);
  
  //creating Path Sprite
  path=createSprite(200,200);
  path.addAnimation("moving",pathImage)
  path.velocityY=4;
  path.scale=1.2

  //creating Runner Sprite
  runner=createSprite(300,300,50,50)
  runner.addAnimation("running", runnerImage)
  runner.scale=0.08

  //creating Wall Sprites
  wall_1=createSprite(400,200,10,400);
  wall_1.visible=false;
  wall_2=createSprite(0,200,10,400);
  wall_2.visible=false;
}

function draw() 
{
  background("black");

  // adding right arrow function
  if (keyDown("right")){
    runner.x=runner.x+5;
  }

  //adding left arrow function
  if (keyDown("left")){
     runner.x=runner.x-5;
  }

  //code to reset background
  if(path.y>400)
  {
    path.y=height/2;
  }

  runner.collide(wall_1);
  runner.collide(wall_2);
    drawSprites();
}

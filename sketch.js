const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, fairy;
var nightImage, starImage, fairyImage;
var music;

function preload(){
  nightImage= loadImage("starnight.png");
  starImage= loadImage("star.png");
  fairyImage= loadAnimation("fairy1.png","fairy2.png");
  music= loadSound("JoyMusic.mp3");
   
}

function setup() {
  createCanvas(800, 750);

  engine= Engine.create();
  world= engine.world;

  starBody= Bodies.circle(650,30,5,{restitution:0.5, isStatic: true})
  World.add(world,starBody);
  
  fairy= createSprite(100,500,50,80);
  fairy.addAnimation("fairyMoving", fairyImage);
  fairy.scale= 0.3;
  
  star= createSprite(700,100,50,50);
  star.addImage(starImage);
  star.scale= 0.3;
  
  //music.playSound();
  

}


function draw() {
  background(nightImage);
  Engine.update(engine);

  

  star.x= starBody.position.x;
  star.y= starBody.position.y;

  if(star.y> 470 ){
    Matter.Body.setStatic(starBody,true);
  }
  drawSprites();
  
}

function keyPressed(){

  if(keyCode===RIGHT_ARROW){
    fairy.x= fairy.x+20;
  }

  if(keyCode===DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }

  if(keyCode===LEFT_ARROW){
    fairy.x= fairy.x-20;
  }
}





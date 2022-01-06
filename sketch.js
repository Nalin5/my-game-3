const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var backgroundImg;
var ground,box,box2,pig,log;

function preload() {
backgroundImg = loadImage("Background.jpg");

}

function setup() {

  createCanvas(3000,1200);
 
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(1500,875,3000,20);
  box = new Box(width-900,300,100,100);
  box2 = new Box(width-490,300,100,100);
  pig = new Pig(width-550,300,80,80)
  log = new Log(width-550,350,100,PI/2)
}

function draw() {
  background(backgroundImg);
  Engine.run(engine);
  ground.display();
  box.display();
  box2.display();
  pig.display();
  log.display();
  drawSprites();
}
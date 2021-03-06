const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;
var towerImg


function preload() {
 backgroundImg = loadImage("./assets/background.gif"); 
 towerImg = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var angle = 20;

  var option ={
    isStatic: true
  };

  ground = Bodies.rectangle(0, height-1, width*2, 1, option);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, option);
  World.add(world, tower);

  canon = new Canon(180, 110, 130, 100, angle);
 
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  canon.display();
  rect(ground.position.x, ground.position.y, width*2, 1);
  push();
  imageMode(CENTER);
  image(towerImg, tower.position.x, tower.position.y, 160, 310);
  pop();
}

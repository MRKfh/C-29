const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var Rope1;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(250,680,500,20);
  Rope1 = new Rope(6,{x:250,y:30})

  Fruit = Bodies.circle(250,300,20,{density:0.001})
  Matter.Composite.add(Rope1.body,Fruit)
  World.add(world,Fruit)
  Fruit_con=new Link(Rope1,Fruit)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  Rope1.show();
  ellipse(Fruit.position.x,Fruit.position.y,20,20)
  
  Engine.update(engine);
  

 
   
}

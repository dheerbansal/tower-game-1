var block1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  engine = Engine.create();
	world = engine.world;
  createCanvas(1200,800);
 
  block1 = new Block(100,200,this.width, this.height);
  block1.shapeColor = "white";
 // block1.scale = 0.09;

  Engine.run(engine);
}

function draw() {
  background("blue");
  Engine.update(engine)
    
  block1.display();

  drawSprites();
}
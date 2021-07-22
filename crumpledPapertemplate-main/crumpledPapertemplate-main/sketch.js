
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	
var world;
var crumpledPaper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
  crumpledPaper = new Paper();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  groundObject.display();
  crumpledPaper.display();
  dustbinObj.display();
  
}

function keyPressed(){
 if(keyCode === UP_ARROW){
   Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x : 72,y : -80});

 }
  
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
  
ground = new Ground(400,600,800,20)
ball = new Ball(150,580,25)
dustbin1 = new Dustbin(550,585,200,10)
dustbin2 = new Dustbin(450,530,10,100)
dustbin3 = new Dustbin(650,530,10,100)


}


function draw() {
  rectMode(CENTER);
  background("red");
  
  ground.display();
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(dustbin,435,460,230,130)
  ball.display();
  

}

function keyPressed(){
	if(keyCode ===UP_ARROW){
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-50});
	}
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    ball=Bodies.circle(200,100,20,{restitution:0.9})
  World.add(world, ball);
	//Create the Bodies Here.
	ground =new Ground(width/2,670,width,20);
    leftSide =new Ground(1100,600,20,120)
	rightSide =new Ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show()
  leftSide.show()
  rightSide.show()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:1.5,y:0.5})

	}
}


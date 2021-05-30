
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   roof = new Roof(350,100,300,30);
   World.add(world, roof);

   bobObj1 = new Bob(250,300);
   bobObj2 = new Bob(300,300);
   bobObj3 = new Bob(350,300);
   bobObj4 = new Bob(400,300);
   bobObj5 = new Bob(450,300);


 ropeObj1 = new Rope(bobObj1.body, roof.body , -100 , 0);
 World.add(world,ropeObj1);

 ropeObj2 = new Rope(bobObj2.body, roof.body , -50 , 0);
 World.add(world,ropeObj2);

 ropeObj3 = new Rope(bobObj3.body, roof.body , 0 , 0);
 World.add(world,ropeObj3);

 ropeObj4 = new Rope(bobObj4.body, roof.body , +50 , 0);
 World.add(world,ropeObj4);

 ropeObj5 = new Rope(bobObj5.body, roof.body , +100 , 0);
 World.add(world,ropeObj5);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  ropeObj1.display();
  ropeObj2.display();
  ropeObj3.display();
  ropeObj4.display();
  ropeObj5.display();


  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-730,y:0});
	}
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, stone, boy, boyImg, mango1, mango2, mango3, mango4, mango5, slingshot;

function preload()
{
	boyImg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(100,640,1,1);
	boy.addImage(boyImg)
	boy.scale = 0.1
	
	//Create the Bodies Here.
    ground = new Ground (400,692,850,20);
	
	tree = new Tree (570,500,50,100);
	
	stone = new Stone (50,580,50,0);
	
	mango1 = new Mango (570,400,50,0);
	mango2 = new Mango (635,410,50,0);
	mango3 = new Mango (700,440,40,0);
	mango4 = new Mango (500,440,30,0);
	mango5 = new Mango (600,480,30,0);

	slingshot = new S(stone.body,{x:50, y:580});
	
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(150,200,650,);
  
  text(mouseX + "," + mouseY, mouseX, mouseY);
 
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot.display();
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
	slingshot.fly();
  }

function detectcollision(lstone,lmango){
	
	mangoPos=lmango.body.position
	stonePos=lstone.body.position
	
	var distance=dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)
		if(distance<=lmango.radius+lstone.radius){
		//console.log(distance);
		  Matter.Body.setStatic(lmango.body,false);
	  }
	}

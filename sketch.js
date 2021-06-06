const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gS = "onSling";
var bgI

function preload() {
    bgI = loadImage("day.png");   
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(250, 400, 500, 5);
  
    hero = new Hero(100, 350, 20, 20);

    enemy = new Enemy(650, 200, 300, 150);

	box1 = new Box(400, 372, 50, 50);
	box2 = new Box(400, 322, 50, 50);
	box3 = new Box(400, 272, 50, 50);
	box4 = new Box(400, 222, 50, 50);
	box5 = new Box(400, 172, 50, 50);
	box6 = new Box(400, 122, 50, 50);	

	box7 = new Box(470, 372, 50, 50);
	box8 = new Box(470, 322, 50, 50);
	box9 = new Box(470, 272, 50, 50);
	box10 = new Box(470, 222, 50, 50);
	box11 = new Box(470, 172, 50, 50);
    box12 = new Box(470, 122, 50, 50);

    
	sling = new Sling(hero.body, {x:100, y:150})   
    

	Engine.run(engine);
  
}

function draw() {
   
  rectMode(CENTER);
  
  Engine.update(engine);
  background(bgI); 
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();

  enemy.display();
 
  hero.display();

  
}

function mouseDragged(){
    if (gS!=="launched"){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    
}
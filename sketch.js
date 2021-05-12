const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground, chain;
var box1, box2,box3,box4, w_ball ,box5,box6,box7;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(500,590,1000,20);
  
  w_ball=new Ball(450,300,40);
 
  chain=new Slingshot(w_ball.body,{x:450,y:225});

  box1= new Box(500,540,60,80);
  box2= new Box(580,540,60,80);
  box3= new Box(660,540,60,80);
  box4= new Box(540,460,60,80);
  box5= new Box(620,460,60,80);
  box6= new Box(580,380,60,80);
  box7= new Box(580,300,60,80);
}
  

function draw() {
  background("lightblue");
  Engine.update(engine);

  ground.display();
  w_ball.display(); 
  chain.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
}

function mouseDragged(){

Matter.Body.setPosition(w_ball.body,{x:mouseX,y:mouseY})

}

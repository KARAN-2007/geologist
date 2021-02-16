

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,ground,hammer,stone,r,iron,s1,s2,s3,s4;

function setup() {
	createCanvas(windowWidth,windowHeight);
   engine=Engine.create();
   world=engine.world;

   ground=new Ground(width/2,height-10,width,20);
   hammer=new Hammer(100,100);
   stone=new Stone(200,height/2,50,50,PI/2);
   r=new Rubber(700,0,15);
   iron=new Iron(800,500,100,30); 
   s1=new Sand(500,300,5);
   s2=new Sand(495,300,5);
   s3=new Sand(480,300,5);
   s4=new Sand(475,300,5);
   console.log(width/2);
}


function draw() {
  Engine.update(engine)
  background("purple");
  ground.display();
  hammer.display();
  stone.display();
  r.display();
  iron.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();

  
  drawSprites();
 

    
 
}

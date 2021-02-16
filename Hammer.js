class Hammer{
  constructor(x,y){
  var option={
        'restitution':0,
        'friction':0.1,
        'density':2

  }
  this.body=Bodies.rectangle(x,y,100,20,option);
  this.width=100;
  this.height=20;
  World.add(world, this.body);
  
  }
  display(){
   var pos=this.body.position;
   pos.x=mouseX;
   pos.y=mouseY;
    rectMode(CENTER);
    strokeWeight(2);
    stroke("white");
    //strokeWeight(5);
      //stroke("green");
    fill("yellow");
    rect(pos.x,pos.y,this.width,this.height);

  }
  

}



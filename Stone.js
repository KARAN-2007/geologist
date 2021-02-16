class Stone{
  constructor(x,y,width,height,angle){
      var option = {
        'restitution':0.2,
        'friction':1,
        'density':3

      }
      this.body= Bodies.rectangle(x,y,width,height,option);
      this.width=width;
      this.height=height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world,this.body);
  }
  display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     strokeWeight(0);
     fill("black");
     rect(0,0,this.width,this.height);
     pop();


  }
    





}
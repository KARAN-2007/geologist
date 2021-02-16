class Rubber{
    constructor(x,y,radius){
        var option = {
            'restitution':0.3,
            'friction':5,
            'density':1

        }
  
    this.body = Bodies.circle(x,y,radius,option)
    this.radius=radius;
    World.add(world,this.body);
}
display(){
 var pos=this.body.position;
 ellipseMode(RADIUS);
 fill("blue");
 ellipse(pos.x,pos.y,this.radius);



}




}
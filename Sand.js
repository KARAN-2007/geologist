class Sand{
    constructor(x,y,radius){
        var option = {
            'restitution':1,
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
 fill("brown");
 ellipse(pos.x,pos.y,this.radius);



}




}
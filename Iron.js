class Iron{
    constructor(x,y,width,height){
       var option = {
           'restitution':0.3,
           'friction':1,
           'density':2
           
       }

       this.body=Bodies.rectangle(x,y,width,height,option);
       this.width=width;
       this.height=height;

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("red");
        strokeWeight(0);
        rect(pos.x,pos.y,this.width,this.height);
    
    }
    



}
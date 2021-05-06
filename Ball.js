class Ball{
    constructor(x,y,r){
        this.image=loadImage("paper.png")
        var options = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:0.5
        }
     this.x=x;
     this.y=y;
     this.r=r;
     this.body=Bodies.circle(x,y,r,options)
     World.add(world, this.body);
    }
display(){
    var paperpos=this.body.position;

    
    imageMode(CENTER)
    strokeWeight(3);
    stroke("purple")
    fill(255,0,255)
    image(this.image,paperpos.x,paperpos.y,100,100)
}
}
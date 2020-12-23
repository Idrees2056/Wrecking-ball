class Ball{
    constructor(x,y,width,height,angle){
        var options={
            density:1,
            frictionAir:0.005,
        }

        this.body =Bodies.rectangle(x,y,width,height,options)// since its variable we add it to constructor
        this.width=width;
        this.height=height;
        World.add(world,this.body)// this .body is used to refer the ground object
    
    }

display(){
var angle= this.body.angle;
    var pos=this.body.position;
    push()  // add new instructions
translate(pos.x,pos.y);
    rotate(angle)

    ellipse(0,0,this.width,this.height)// to create the ground as rectangle
pop()
}

}
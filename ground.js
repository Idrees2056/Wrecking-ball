class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true  // the body will not fall no gravity
        }

        this.body =Bodies.rectangle(x,y,width,height,options)// since its variable we add it to constructor
        this.width=width;
        this.height=height;
        World.add(world,this.body)// this .body is used to refer the ground object
    
    }

display(){
var pos=this.body.position;
rectMode(CENTER)
fill("brown");
    rect(pos.x,pos.y,this.width,this.height)// to create the ground as rectangle

}

}
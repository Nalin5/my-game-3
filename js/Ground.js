class Ground{
constructor(x,y,width,height){
var options = {
isStatic: true
}
this.width = width
this.height = height
this.x = x
this.y = y
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options); 
World.add (world,this.body)
}
display(){
    push();
    fill("white");
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
}

}
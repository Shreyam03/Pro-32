class Box {
  constructor(x,y,width,height,color) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    this.color = color;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    if(this.body.speed<5){
    push()
    rectMode(CENTER);
    fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
    }
    else
    {
     World.remove(world,this.body);
     push();
     this.visibility=this.visibility-1;
     tint(this.visibility,0,0)
     pop();
    }
   
  }
  score()
  { 
   if(this.visibility===244)
   {
     score++;
   }
  }
}

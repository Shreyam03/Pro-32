class Polygon {
    constructor(x,y,r,color) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius = r;
      this.color = color;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
        imageMode(CENTER);
     
    image(this.image,pos.x, pos.y, this.radius, this.radius);
    }
  };
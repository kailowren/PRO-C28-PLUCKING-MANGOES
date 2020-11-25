class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 0
      }
      
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position; 
      push() 
      translate(pos.x, pos.y); 
      rectMode(CENTER) 
     // fill(255,0,255) 
      imageMode(CENTER); 
      image(this.image,0,0,this.radius,this.radius) 
      pop()
    }
  };
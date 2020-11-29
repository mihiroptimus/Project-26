class Side {
    constructor(x, y, width, height) {
      var options ={
        isStatic: true,
        density: 1.2
    
    
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y)
      rectMode(CENTER);
      rotate(angle)
      fill("green");
      strokeWeight(4);
      stroke("green");
      rect(0, 0, this.width/2, this.height*3);
      pop();
    }
  };
  
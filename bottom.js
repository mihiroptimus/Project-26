class Bottom {
  constructor(x, y, width, height) {
    var options ={
      isStatic: true,
      density: 1.2
    }

    this.image = loadImage("dustbingreen.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle
    //push();
    //translate(pos.x, pos.y)
    //rectMode(CENTER);
    //rotate(angle)
    fill("green");
    strokeWeight(4);
    stroke("green");
    //rect(0, 0, this.width*2, this.height/2);
    //pop();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y - 60, this.width + 100, this.height + 100);
  }
};



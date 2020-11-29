class Paper {

    constructor(x, y){

        var options = {
            'restitution': 0.4,
            'friction': 0.3,
            'density': 1.0
        
        }
        
        this.image = loadImage("paper2.png");
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 20;

        World.add(world, this.body)

    }

    display(){

        var pos = this.body.position
        var angle = this.body.angle
       // push();
       // translate(pos.x, pos.y)
        //ellipseMode(RADIUS)
       // rotate(angle)
        fill("white")
        //ellipse(pos.x, pos.y, this.radius, this.radius);
       // pop();
       imageMode(CENTER);
       image(this.image, pos.x, pos.y, this.radius + 20, this.radius + 20);

    }

}
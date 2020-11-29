const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;
var ground;
var bottom, left, right;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Matter.Body.create(Paper);

    paper = new Paper(200, 100);

    ground = new Ground(600, height, 1200, 20);
    bottom = new Bottom(750,380,50,50);
    left = new Side(690,320,50,70);
    right = new Side(810,320,50,70);
}

function draw(){
    background(0);
    Engine.update(engine);
    paper.display()
    bottom.display();  
    left.display();  
    right.display();  
    ground.display();;
}

function keyPressed(){
    if (keyCode === UP_ARROW){

        Matter.Body.applyForce(paper.body, paper.body.position, {x: 54, y: -54})

    }
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  var ballOptions = {
    restitution: 1
  }

  ground = Bodies.rectangle(200,380, 400,30, options);
  World.add(world, ground);
  ball = Bodies.circle(200, 200, 20, ballOptions);
  World.add(world, ball);

  //console.log(object);
  //console.log(object.type)

}

function draw() {
  background(0); 
  Engine.update(engine);
  
  rectMode(CENTER)
  rect (ground.position.x,ground.position.y,400,30)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20,20)


}
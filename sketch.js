//Coloca el nombre del motor, mundo y cuerpos del motor físico.

const Engine = ;
const World = ;
const Bodies = ;
const Constraint = ;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

//Crear nuevo cañon y bala de cañon

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

//muestra el cañon y la bala de cañon en la pantalla

}

//Crea una función para lanzar la bala de cañon
function keyReleased() {
  if ( === ) {
    ;
  }
}

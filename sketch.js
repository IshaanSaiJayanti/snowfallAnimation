var snowbg;
var person;
var personImg, personStand;

function preload(){
  snowbg = loadImage("snow1.jpg");
  personStand = loadImage("boyRun1.png");
  personImg = loadAnimation("boyRun1.png","boyRun2.png","boyRun3.png","boyRun4.png");
}
function setup() {
  createCanvas(800,400);
  person = createSprite(200, 300, 50, 50);
  person.addImage(personStand);
}

function draw() {
  background(snowbg);
  if(keyDown(RIGHT_ARROW)){
    person.x = person.x+5;
    person.addAnimation("boyRun",personImg);
  }
  
  drawSprites();
}
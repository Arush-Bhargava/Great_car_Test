var car,wall;
var speed,weight;
var deformation;

function preload(){

}

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,200);
  
  speed = random(50,90);
  weight = random(400,1500);

  deformation = speed*speed*weight/45000;

}

function draw() {
  background("pink");  

  wall.visible = false;

car.velocityX = speed;

textSize(30);
fill ("blue");

if (car.isTouching(wall)){
 
if (deformation<80){
  car.shapeColor =(" blue");
  text("Below Average",700,200);
} else if(deformation > 80 && deformation < 150){
  car.shapeColor =("yellow");
  fill("yellow");
  text("Average",700,200);
} else if(deformation > 150){
  car.shapeColor = ("red");
  fill("red");
  text("Lethal",700,200);
}
  car.velocityX = 0;
}


  drawSprites();
}
var fixedRect, movingRect, aball,anball;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  aball = createSprite(500, 300, 50, 80);
  aball.shapeColor = "yellow";
  
  anball = createSprite(300, 300, 50, 80);
  anball.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,anball)){
  movingRect.shapeColor = "red";
    anball.shapeColor = "red";
}
  else{
   movingRect.shapeColor = "green";
    anball.shapeColor = "blue";

  }
  drawSprites();
}

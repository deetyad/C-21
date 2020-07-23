var rect1, rect2;


function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(400, 300, 100, 50);
  rect1.debug = true;
  rect2.debug = true;
  //rect1.velocityY = 3;
  //rect2.velocityY = -3;
}

function draw() {
  background(255,255,255); 

//bounceOff(rect1, rect2);

    rect2.x = mouseX;
    rect2.y = mouseY;


    if (isTouching(rect1, rect2)) {

      rect1.shapeColor = "blue";
      rect2.shapeColor = "red";


    } else {

      rect1.shapeColor = "orange";
      rect2.shapeColor = "green";

    }


  drawSprites();
}
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  if(mouseX > 50 && mouseX < 150){
    ellipse(300, 200, 100, 100);
  } else if(mouseX > 150 && mouseX < 250) {
    rect(300, 200, 100, 100);
    rectMode(CENTER);
  } else if(mouseX > 250){
    line(0, 0, width, height);
  } else {
    point(300, 200);
  }
  
}
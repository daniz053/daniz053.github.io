function setup() {
    createCanvas(windowWidth, windowHeight);
    background("hotpink")
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
  
  function draw() {
    strokeWeight(2);
    stroke("orange");
    fill("hotpink")
    ellipse(mouseX, mouseY, 250, 250);
  }

function mousePressed(){
    noLoop();
    redraw();
}
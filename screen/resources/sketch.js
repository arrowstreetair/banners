let yvalues;
let dx;
let w;
let amplitude = 75.0;
let xspacing = 16;
let period = 500.0;
let theta = 0.0;
let starty = 1;
let xpos, ypos;
let yspeed = 1;
let xdirection = 1;
let ydirection = 1;
let direction_choices = [-1,1];
let cp1direction;
let cpspeed = -1;
let cp1x,cp1y,cp2x,cp2y;
var canvas;
let x_idx = 0;
let y_idx = 0;


function preload() {
  //img = loadImage('./image_background.jpg');
  //fontBanner = loadFont('./MetaOT-Light.otf');
}

function setup() {
  canvas = createCanvas(windowWidth,windowWidth/4);
  period = windowWidth/3*2;
  canvas.parent("main");
  w = windowWidth;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));

  xpos = 0;
  ypos = 0;

  cp1x = random(100,windowWidth-100);
  cp1y = random(0,windowWidth/4);

  cp2x = windowWidth - cp1x;
  cp2y = height - cp1y;

  cp1ydirection = random(direction_choices);
  cp1xdirection = random(direction_choices);

}

function draw() {
  //setup
  background(255);
  noFill();
  strokeWeight(.1);
  stroke('#3399ff');

  //animate edges
  ypos = ypos + yspeed * ydirection;
  //animate control point 1
  //y
  cp1y = cp1y + random(-2,2);
  if (y_idx>100){
    cp1ydirection *= -1;
    y_idx = 0;
  }
  //x
  cp1x = cp1x + random(-2,2);
  if (x_idx>200){
    cp1xdirection *= -1;
    x_idx = 0;
  }

  cp2x = windowWidth - cp1x;
  cp2y = height - cp1y;



  fill(0);
  ellipse(cp1x,cp1y,10,10);
  ellipse(cp2x,cp2y,10,10);
  noFill();

  //animate control point 2
  //y
  cp2y = cp2y + random(-2,2);
  if (y_idx>100){
    cp1ydirection *= -1;
    y_idx = 0;
  }
  //x
  cp2x = cp2x + random(-2,2);
  if (x_idx>200){
    cp1xdirection *= -1;
    x_idx = 0;
  }

  y_idx = y_idx + 1;
  x_idx = x_idx + 1;
  //draw curves
  for (var i=0;i<200;i+=10){
    noFill();
    bezier(0,ypos+i,cp1x,cp1y,cp2x,cp2y,windowWidth,ypos+i)
    changeDirection(ypos+i);
  }


}

function windowResized() {
  canvas = resizeCanvas(windowWidth, windowWidth/4);
  period = windowWidth/3*2;
  w = windowWidth;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function changeDirection(ypos){
  //ypos = ypos + yspeed * ydirection;
  if (ypos > height - 20 || ypos < 0) {
    ydirection *= -1;
  }

  fill(0);
  //ellipse(xpos, ypos, 20,20);
}

function dothis() {
  x = mouseX;
  y = mouseY;
  print("test");
}

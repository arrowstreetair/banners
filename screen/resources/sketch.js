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


function preload() {
  //img = loadImage('./image_background.jpg');
  //fontBanner = loadFont('./MetaOT-Light.otf');
}

function setup() {
  var canvas = createCanvas(windowWidth,windowWidth/4);
  period = windowWidth/3*2;
  canvas.parent("main");
  w = windowWidth;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));

  xpos = 0;
  ypos = 0;
}

function draw() {

  background(255);
  noFill();
  strokeWeight(.1);
  stroke('#3399ff');
  let x = mouseX;
  let y = mouseY;
  if (y>windowWidth/4){
    y = windowWidth/4;
  }
  for (var i=starty;i<windowWidth/4-100;i+=10){
    //bezier(0,i,x,y,x,-y,windowWidth,i);
  }

  ypos = ypos + yspeed * ydirection;
  //if (ypos > height - 20 || ypos < 0) {
    //ydirection *= -1;
  //}
  //fill(0);
  //ellipse(xpos, ypos, 20,20);
  for (var i=0;i<200;i+=10){
    noFill();
    bezier(0,ypos+i,x,y,x,y/2,windowWidth,ypos+i)
    createEllipse(ypos+i);
  }


}

function windowResized() {
  canvas = resizeCanvas(windowWidth, windowWidth/4);
  period = windowWidth/3*2;
  w = windowWidth;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function createEllipse(ypos){
  //ypos = ypos + yspeed * ydirection;
  if (ypos > height - 20 || ypos < 0) {
    ydirection *= -1;
  }
  fill(0);
  //ellipse(xpos, ypos, 20,20);
}

let yvalues;
let dx;
let w;
let amplitude = 75.0;
let xspacing = 16;
let period = 500.0;
let theta = 0.0;


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
  for (var i=0;i<windowWidth/4-100;i+=10){
    bezier(0,i,x,y,x,y,windowWidth,i);
  }
}

function windowResized() {
  canvas = resizeCanvas(windowWidth, windowWidth/4);
  period = windowWidth/3*2;
  w = windowWidth;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

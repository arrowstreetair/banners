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
  calcWave();
  renderWave();
  noFill();
  stroke(0);
  beginShape();
  curveVertex(0, yvalues[0]);
  curveVertex(0, yvalues[0]);
  curveVertex(int(windowWidth/2), yvalues[10]);
  curveVertex(int(windowWidth), yvalues[20]);
  curveVertex(int(windowWidth), yvalues[20]);
  endShape();
}

function calcWave() {
  theta += 0.005;

  let x = theta;
  for (let i=0; i< yvalues.length; i++){
    yvalues[i] = sin(x) * amplitude;
    x+= dx;
  }
}

function renderWave() {
  noStroke();
  fill(0);
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, yvalues[x], 2,2);
  }
}

function windowResized() {
  canvas = resizeCanvas(windowWidth, windowWidth/4);
  period = windowWidth/3*2;
  w = windowWidth;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

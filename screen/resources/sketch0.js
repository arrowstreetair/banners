let w,h;
let amplitude = 75.0;
let xspacing = 16;
let period = 500.0;
let theta = 0.0;
let starty = 1;
let xpos_left, ypos_left, xpos_right, ypos_right;
let xpos_cp1, ypos_cp1;
let xpos_cp2, ypos_cp2;
let yspeed = .5;
let left_direction = 1;
let right_direction;
let cp1_directions = [-1,1];
let cp1_direction;
let cp2_direction;
var canvas;
let step;


function preload() {
  //img = loadImage('./image_background.jpg');
  //fontBanner = loadFont('./MetaOT-Light.otf');
}

function setup() {
  canvas = createCanvas(windowWidth,windowWidth/4);
  canvas.parent("main");
  w = canvas.width;
  h = canvas.height;

  xpos_left = 0;
  ypos_left = 0;
  xpos_right = w;
  ypos_right = h;
  xpos_cp1 = random(w/5,w/5*2);
  ypos_cp1 = random(10,h-10);
  xpos_cp2 = random(w/5*3,w/5*4);
  ypos_cp2 = random(10,h-10);

  cp1_direction = random(cp1_directions);
  cp2_direction = random(cp1_directions);

  canvas.mouseOver(mouseMoved);

}

function draw() {
  //SETUP
  background(255);
  noFill();
  strokeWeight(.1);
  stroke('#3399ff');
  right_direction = left_direction*-1;

  ypos_left = ypos_left + yspeed * left_direction;
  ypos_right = ypos_right + yspeed * right_direction;
  ypos_cp1 = ypos_cp1 + yspeed * cp1_direction;
  ypos_cp2 = ypos_cp2 + yspeed * cp2_direction;

  step=10;

  for (var i=-h; i<h;i+=step){
    //DEFINE LEFT anchor
    //define left anchor movement
    fill(0);
    //ellipse(xpos_left, ypos_left+i,10,10);

    //DEFINE RIGHT anchor
    //define right anchor movement
    fill(0);
    //ellipse(xpos_right, ypos_right+i,10,10);

    //DEFINE CP1 anchor
    //define CP1 anchor movement
    fill(0);
    ellipse(xpos_cp1, ypos_cp1,10,10);

    //DEFINE CP2 anchor
    //define CP2 anchor movement
    fill(0);
    ellipse(xpos_cp2, ypos_cp2,10,10);

    noFill()

    stroke(0);
    bezier(xpos_left,ypos_left+i,xpos_cp1,ypos_cp1,xpos_cp2,ypos_cp2,xpos_right,ypos_right+i);
  }


  //CHANGE DIRECTION AT EDGE
  if (ypos_left > h || ypos_left < 0){
    left_direction *= -1;
  }
  if (ypos_cp1 > h || ypos_cp1 < 0){
    cp1_direction *= -1;
  }
  if (ypos_cp2 > h || ypos_cp2 < 0){
    cp2_direction *= -1;
  }



}

function windowResized() {
  canvas = resizeCanvas(windowWidth, windowWidth/4);
  w = canvas.width;
  h = canvas.height;
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
  xpos_cp1 = mouseX;
  ypos_cp1 = mouseY;
}

function mouseMoved(){
  xpos_cp1 = mouseX;
  ypos_cp1 = mouseY;
}

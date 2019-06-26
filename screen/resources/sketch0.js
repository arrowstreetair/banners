let w,h;
let amplitude = 75.0;
let xspacing = 16;
let period = 500.0;
let theta = 0.0;
let starty = 1;
let xpos_left, ypos_left, xpos_right, ypos_right;
let xpos_cp1, ypos_cp1;
let xpos_cp2, ypos_cp2;
let left_yspeed = .25;
let right_yspeed = .25;
let cp1_speed = 2;
let cp2_speed = 2;
let left_direction = 1;
let right_direction;
let cp1_directions = [-1,1];
let cp1_direction;
let cp2_direction;
var canvas;
let step;
let curve_height;


function preload() {
  //img = loadImage('./image_background.jpg');
  //fontBanner = loadFont('./MetaOT-Light.otf');
}

function setup() {
  canvas = createCanvas(windowWidth,windowWidth/3);
  //canvas.parent("main");
  w = canvas.width;
  h = canvas.height;
  curve_height = 300;

  xpos_left = 0;
  ypos_left = 0;
  xpos_right = w;
  ypos_right = h-curve_height;
  xpos_cp1 = random(w/10,w/10*4);
  ypos_cp1 = random(10,h-10);
  xpos_cp2 = random(w/10*6,w/10*9);
  ypos_cp2 = random(10,h-10);

  cp1_direction = random(cp1_directions);
  cp2_direction = random(cp1_directions);


  left_yspeed = random(0.25,3);
  right_yspeed = random(0.25,3);
  cp1_speed = random(1,4);
  cp2_speed = random(1,4);

  canvas.mouseOver(mouseMoved);

}

function draw() {
  //SETUP
  background(255);
  noFill();
  strokeWeight(.1);
  stroke('#3399ff');
  right_direction = left_direction*-1;

  ypos_left = ypos_left + left_yspeed * left_direction;
  ypos_right = ypos_right + right_yspeed * right_direction;
  ypos_cp1 = ypos_cp1 + cp1_speed * cp1_direction;
  ypos_cp2 = ypos_cp2 + cp2_speed * cp2_direction;

  step = 10;

  for (var i=-h; i<curve_height;i+=step){
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
    //ellipse(xpos_cp1, ypos_cp1,10,10);

    //DEFINE CP2 anchor
    //define CP2 anchor movement
    fill(0);
    //ellipse(xpos_cp2, ypos_cp2,10,10);

    noFill();
    //fill(61,158,255,3);
    stroke(200);
    bezier(xpos_left,ypos_left+i,xpos_cp1,ypos_cp1,xpos_cp2,ypos_cp2,xpos_right,ypos_right+i);
    for (var t = 0;t<1;t+=.025){
      let x = bezierPoint(xpos_left,xpos_cp1,xpos_cp2,xpos_right,t);
      let y = bezierPoint(ypos_left+i,ypos_cp1,ypos_cp2,ypos_right+i,t);
      fill('#fffff');
      stroke(200);
      ellipse(x,y,2,2);
    }

  }


  //CHANGE DIRECTION AT EDGE
  if (ypos_left > h-curve_height || ypos_left < 0){
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
  canvas = createCanvas(windowWidth,windowWidth/3);
  w = canvas.width;
  h = canvas.height;

  xpos_right = w;
  ypos_right = h-curve_height;
}

function mouseMoved(){
  xpos_cp1 = mouseX+300;
  xpos_cp2 = w - xpos_cp1;
  ypos_cp1 = mouseY;
  //xpos_right = w - mouseX;
  //xpos_left = w - xpos_right;
  bezierDetail(10);
}

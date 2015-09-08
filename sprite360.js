window.addEventListener('load', init, false);

var image = new Image()
    image.src = 'cascadeR.png';
var frames = 35;
var currentFrame = 0;

var canvasX;
var canvasY;
var mouseIsDown = 0;


//---------------------------------------------------------------//
//------------------------MOUSE CONTROL-------------------------//

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.addEventListener("mousedown",mouseDown, false);
  canvas.addEventListener("mousemove",mouseXY, false);
  canvas.addEventListener("touchstart", touchDown, false);
  canvas.addEventListener("touchmove", touchXY, true);
  canvas.addEventListener("touchend", touchUp, false);
       
  document.body.addEventListener("mouseup", mouseUp, false);
  document.body.addEventListener("touchcancel", touchUp, false);
} 
  function mouseUp() {
    mouseIsDown = 0;
    mouseXY();
} function touchUp() {
    mouseIsDown = 0;
    rotate();
} function mouseDown() {
    mouseIsDown = 1;
    mouseXY();
} function touchDown() {
    mouseIsDown = 1;
    touchXY();
} function mouseXY(e) {
    // e.preventDefault();
    // canvasX = e.pageX - canvas.offsetLeft;
    // canvasY = e.pageY - canvas.offsetTop;
    // rotate();
} function touchXY(e) {
    e.preventDefault();
    canvasX = e.targetTouches[0].pageX - canvas.offsetLeft;
    canvasY = e.targetTouches[0].pageY - canvas.offsetTop;
    rotate();
}
//===============ROTATION CONTROL========================//
function rotate() {

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);

    if (!mouseIsDown) {
    currentFrame;
    } else if (mouseIsDown) {
      currentFrame--;
    }
};
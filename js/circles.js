var canvas = document.getElementById('circles');
var ctx = canvas.getContext('2d');

var ImageObj= new Image();
ImageObj.src = 'http://www.html5canvastutorials.com/demos/assets/wood-pattern.png';

ImageObj.onload = function() {
  var pattern = ctx.createPattern(ImageObj, 'repeat');

  // switch to multiply blending
  ctx.globalCompositeOperation = 'overlay';
  // draw magenta circle
  ctx.fillStyle = 'rgb(255,0,255)';
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  // draw cyan circle
  ctx.fillStyle = 'rgb(0,255,255)';
  ctx.beginPath();
  ctx.arc(100, 50, 50, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  // draw yellow circle
  ctx.fillStyle = pattern;
  ctx.beginPath();
  ctx.arc(75, 100, 50, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();

}
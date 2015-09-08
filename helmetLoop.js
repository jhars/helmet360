var imageHelmet = new Image();
    imageHelmet.src = 'cascadeR.png';
var framesHelmet = 35;
var currentFrameHelmet = 0;
var width = 200;
var height = 200;

//======================360 LOOP=======================//
var draw = function(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    imageHelmet.onload = function() {
            context.drawImage(imageHelmet, 200, 200);
          };

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(imageHelmet, 0, height * currentFrameHelmet, width, height, 0, 0, width, height);
    
    if (currentFrameHelmet == frames) {
    currentFrameHelmet = 0;
    } else {
    currentFrameHelmet++;
    }
};       
setInterval(draw, 60);
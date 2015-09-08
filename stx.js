// window.addEventListener('load', initControl, false);

var canvas = document.getElementById("clickCanvas");
var ctx = canvas.getContext("2d");

var image = new Image()
image.src = 'cascadeR.png';

var frames = 35;
var currentFrame = 0;
var click = true;
var width = 200;
var height = 200;


function initControl() {

	canvas.addEventListener("mousedown", doMouseDown, false);
	document.body.addEventListener("mouseup", mouseUp, false);

	function mouseUp() {
	  click = false;
	  rotate('L');
	}
	function doMouseDown (event) {
		click = true;
		var canvasX;
		rotate('R');
	}

	function mouseX (event) {
	    // event.preventDefault();

	    var canvasX = event.pageX;
	    console.log(canvasX);
	    return canvasX;
	}
	function rotate(X) {
	    ctx.clearRect(0, 0, width, height);
	    ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);

	    if (X === 'R'){
	    	canvas.addEventListener("mousemove",mouseX, false);
	    	currentFrame = 0;
	    	mouseX();
	    } if (X === 'L') {
	    	canvas.removeEventListener("mousemove",mouseX, false);
				currentFrame = 18;
				mouseX();
				}
	};
}






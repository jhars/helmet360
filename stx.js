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

var canvasX;


function initControl() {

	canvas.addEventListener("mousedown", doMouseDown, false);
	document.body.addEventListener("mouseup", mouseUp, false);
	canvas.addEventListener('click', function() { }, false);

	function mouseUp() {
	  click = false;
	  rotate(false);
	}
	function doMouseDown (event) {
		click = true;
		rotate(true);
	}
	function mouseX (event) {
	    // event.preventDefault();
	    canvasX = event.pageX;
	    //=========360 Controller============//
	    canvas.addEventListener('click', function(event){
	    	var clickPosIndex = canvasX;
	    	console.log("click Posititon = " + clickPosIndex);
	    });
	    currentFrame++;
	    var mIndex = canvasX;
	    console.log("mIndex = " + mIndex);
	    var preX = canvasX;

	    // currentFrame --;
	    return canvasX;
	}

	
	function rotate(mouse) {
	    ctx.clearRect(0, 0, width, height);
	    ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
	    // var Xindex;
	    // ROTATE RIGHT
	    if (mouse === true){
	    	canvas.addEventListener("mousemove",mouseX, false);

	    	if (currentFrame === 35) {
	    		currentFrame = 0;
	    	}
	    	mouseX();
	    	//=========PSEUDO 360 Controller============//

	    	// Xindex -= currentFrame;
	    	// currentFrame --;

	    	//X-Coord-Mouse + Rotational Logic Here...

	    	// Listen for MouseDown
	    	// if (MouseDoown == true)
	    	// 	currentXcoord = mouse@canvas-X-pos;
	    	// 	Listen for mouseMove;

	    	// var DELTA = X0-X1 (change in mouse position)

	    	// 	if (DELTA < 0) {
	    	// 		G0-Right->;
	    	// 		X1 = X0;
	    	// 	} if (DELTA > 0) {
	    	// 			<-GO-Left;
	    	// 			X1 = X0;
	    	// 		}
	
	    	// ====== MOUSE-UP ====//
	    } if (mouse === false) {
	    	console.log("ending CanvasX = " + canvasX);
	    	canvas.removeEventListener("mousemove",mouseX, false);
				mouseX();
				}
	};
}






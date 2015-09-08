window.addEventListener('load', initControl, false);

var canvas = document.getElementById("clickCanvas");
var ctx = canvas.getContext("2d");

var image = new Image()
image.src = 'cascadeR.png';

var frames = 36;
var bottomFrame = 1;
var currentFrame = bottomFrame;
var click = false;
var width = 200;
var height = 200;



function initControl() {

	var X = [];
	var DELTA; 
	var ALPHA;
	var ALPHA2;

	canvas.addEventListener("mousedown", doMouseDown, false);

	function doMouseDown (event) {
		canvas.addEventListener("mousemove",mouseX, false);
		document.body.addEventListener("mouseup", mouseUp, false);
		X[0] = event.pageX;//set initial X == currentMouse Location

	};	

	function mouseUp(event) {
		document.body.removeEventListener("mouseup", mouseUp, false);
	  canvas.removeEventListener("mousemove",mouseX, false);
	  console.log("alpha2 -> " + ALPHA2);

	};

	function mouseX (event) {
	    // event.preventDefault();
	    var canvasX = event.pageX;
	    X[1] = canvasX;
	  	A = ALPHA;
	  	var DIFF = X[0] - X[1];
	  	ALPHA = Math.abs(DIFF);
	  	B = ALPHA;
	  	console.log("A - B = " + (A - B));

	  if (A != B){
	  			if (A < B){
	  	  		// ALPHA++;
	  	  		if (currentFrame > frames ) {
	  	  			currentFrame = bottomFrame;
	  	  		} currentFrame++;
	  	  	} 

	  	  	if (A > B) {
	  	  		// ALPHA = -ALPHA;
	  	  		if (currentFrame < bottomFrame ) {
	  	  			currentFrame = frames;
	  	  		} currentFrame--;
	  	  		console.log("ALPHA06 =>" + ALPHA);
	  	  		// DELTA = currentFrame;
	  	  	} 
	  	  	// A = B;
	  	  	var ALPHA2 = ALPHA;
	  	  	console.log("ALPHA##2 => " + ALPHA);


	  	  	X[1] = X[0];
	  }

	  	ctx.clearRect(0, 0, width, height);
	  	ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);

	    // return canvasX;
	}

}

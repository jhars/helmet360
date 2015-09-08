function initControl() {
	var canvas = document.getElementById("clickCanvas");
	canvas.addEventListener("mousedown", doMouseDown, false);

	function doMouseDown (event) {
		canvasX = event.pageX;
		// canvasXX = event.pageX - canvas.offsetTop;
		// console.log(canvasXX); //diff = |208|
		// canvasY = event.pageY;
		// canvasYY = e.pageY - canvas.offsetTop;
		console.log(canvasX);
		
	}
}




//=========PSEUDO 360 Controller============//

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
		
// 		
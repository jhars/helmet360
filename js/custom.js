      //============IMAGE LOADER=================//
      var images = {};
      function loadImages(sources, callback) {

        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for(var src in sources) {
          numImages++;
        }
        for(var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }

      var canvas = document.getElementById('customHelmet');
      var context = canvas.getContext('2d');


      var sources = {
        BASE: '../images/crShell_WHITE.png',
        wood: 'http://www.html5canvastutorials.com/demos/assets/wood-pattern.png',
        shellBLUE: '../images/crShell_BLUE.png',
        shellORANGE: '../images/crShell_ORANGE.png'
      };

      loadImages(sources, function(images) {
        context.drawImage(images.wood, 0, 0, canvas.width, canvas.height),
        context.drawImage(images.BASE, 0, 0, canvas.width, canvas.height)
        // context.drawImage(images.shellBLUE, 0, 0, canvas.width, canvas.height)
      });

//============= BUTTON/RECTANGLE =================//

var buttonShell = document.getElementById('btnShell');
var btn = buttonShell.getContext('2d');

btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
btn.fillStyle = 'blue';
btn.fill();
btn.lineWidth = 7;
btn.strokeStyle = 'black';
btn.stroke();

            // add click listener to canvas
            document.getElementById('btnShell').addEventListener('click', function() {
              console.log('lets do this...');
              context.drawImage(images.shellBLUE, 0, 0, canvas.width, canvas.height);
              console.log(sources.BASE);
            });

            document.getElementById('orange').addEventListener('click', function() {
              console.log('lets do this...ORANGE');
              context.drawImage(images.shellORANGE, 0, 0, canvas.width, canvas.height);
              console.log("thru ORANGE click");
            });

            document.getElementById('customHelmet').addEventListener('click', function() {
              console.log('lets do this...BLANK!!');
              context.drawImage(images.BASE, 0, 0, canvas.width, canvas.height);
              console.log("we cleared it... sort of");
            });








var chin, mask, visor, panel, strap, wrap;

var chinSources = {
  black: '../images/layers/side/chin-guards/chin-guard-black.png',
  neonGreen: '../images/layers/side/chin-guards/chin-guard-neonGreen.png',
  white: '../images/layers/side/chin-guards/chin-guard-white.png',
  red: '../images/layers/side/chin-guards/chin-guard-red.png'
};
var maskSources = {
  gold: '../images/layers/side/masks/mask-gold.png',
  purple: '../images/layers/side/masks/mask-purple.png',
  silver: '../images/layers/side/masks/mask-silver.png',
  white: '../images/layers/side/masks/mask-gold.png'
};
var visorSources = {
  black: '../images/layers/side/visors/visor-black.png',
  carbon: '../images/layers/side/visors/visor-carbon.png',
  green: '../images/layers/side/visors/visor-green.png',
  red: '../images/layers/side/visors/visor-red.png',
  white: '../images/layers/side/visors/visor-white.png'
};
var wrapSources = {
  carbon: '../images/layers/side/wraps/wrap-carbon.png',
  black: '../images/layers/side/wraps/wrap-black.png',
  sunrise: '../images/layers/side/wraps/sun-rise.png',
  white: '../images/layers/side/wraps/wrap-white.png'
};
var panelSources = {
  green: '../images/layers/side/back-panel/back-panel-neon-green.png',
  purple: '../images/layers/side/back-panel/back-panel-purple.png',
  green: '../images/layers/side/back-panel/back-panel-SunShine.png'
};
var strapSources = {
  black: '../images/layers/side/straps/chin-strap-black.png',
  white: '../images/layers/side/straps/chin-strap-white.png'
};






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
        template: '../images/TEMPLATE.png',
        black: '../images/BaseBlack.png',
        chinstrap: '../images/layers/side/straps/chin-strap-white.png'
      };

      loadImages(sources, function(images) {
        context.drawImage(images.black, 0, 0, canvas.width, canvas.height),
        context.drawImage(images.BASE, 0, 0, canvas.width, canvas.height)
        // BASE LAYERS
      });
      document.getElementById('wrapUI').addEventListener('click', function() {
        // canvas.removeEventListener("mousemove",mouseX, false);
        wrap = true;
      });
      document.getElementById('chinUI').addEventListener('click', function() {
        // canvas.removeEventListener("mousemove",mouseX, false);
        chin = true;
      });
      document.getElementById('maskUI').addEventListener('click', function() {
        // canvas.removeEventListener("mousemove",mouseX, false);
        mask = true;
      });
      document.getElementById('visorUI').addEventListener('click', function() {
        // canvas.removeEventListener("mousemove",mouseX, false);
        visor = true;
      });
      document.getElementById('panelUI').addEventListener('click', function() {
        // canvas.removeEventListener("mousemove",mouseX, false);
        panel = true;
      });
      document.getElementById('strapUI').addEventListener('click', function() {
        // canvas.removeEventListener("mousemove",mouseX, false);
        strap = true;
      });


      document.getElementById('customHelmet').addEventListener('click', function() {
        context.drawImage(images.BASE, 0, 0, canvas.width, canvas.height);
      });


//============= BUTTON/RECTANGLE =================//



//[[[RED]]]

var buttonRed = document.getElementById('btnRed');
var btn = buttonRed.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
btn.fillStyle = 'red';
btn.fill();
document.getElementById('btnRed').addEventListener('click', function() {
  // context.drawImage(images.shellBLUE, 0, 0, canvas.width, canvas.height);
  //currentFrame = context. ??
});

//[[[GREEN]]]

var buttonGreen = document.getElementById('btnGreen');
var btn = buttonGreen.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
btn.fillStyle = 'Green';
btn.fill();
document.getElementById('btnGreen').addEventListener('click', function() {
  // context.drawImage(images.shellBLUE, 0, 0, canvas.width, canvas.height);
  //currentFrame = context. ??
});

//[[GOLD]]

var buttonGold = document.getElementById('btnGold');
var btn = buttonGold.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
btn.fillStyle = 'gold';
btn.fill();
document.getElementById('btnGold').addEventListener('click', function() {

  var maskGOLD = new Image();
  maskGOLD.src = maskSources.gold;

  context.drawImage(maskGOLD, 0, 0, canvas.width, canvas.height);
  //currentFrame = context. ??
});

//[[PURPLE]]

var buttonPurple = document.getElementById('btnPurple');
var btn = buttonPurple.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
btn.fillStyle = 'purple';
btn.fill();
document.getElementById('btnPurple').addEventListener('click', function() {
  // context.drawImage(images.shellBLUE, 0, 0, canvas.width, canvas.height);
  //currentFrame = context. ??
});




//[[[ORANGE]]]

var buttonOrange = document.getElementById('btnOrange');
var orange = buttonOrange.getContext('2d');
orange.beginPath();
orange.rect(0, 0, canvas.width, canvas.height);
orange.fillStyle = 'orange';
orange.fill();
document.getElementById('btnOrange').addEventListener('click', function() {
  // context.drawImage(images.shellORANGE, 0, 0, canvas.width, canvas.height);
});

//[[BLACK]]

var buttonBlack = document.getElementById('btnBlack');
var black = buttonBlack.getContext('2d');
black.beginPath();
black.rect(0, 0, canvas.width, canvas.height);
black.fillStyle = 'black';
black.fill();
document.getElementById('btnBlack').addEventListener('click', function() {
  context.drawImage(images.black, 0, 0, canvas.width, canvas.height);
  //currentFrame = context. ??
});

//[[TEMPLATE]]

var buttonTemplate = document.getElementById('btnTEMPLATE');
var btn = buttonTemplate.getContext('2d');
btn.beginPath();
btn.rect(0, 0, canvas.width, canvas.height);
btn.fillStyle = 'white';
btn.fill();
document.getElementById('btnTEMPLATE').addEventListener('click', function() {
  context.drawImage(images.template, 0, 0, canvas.width, canvas.height)
});

// // [[CHIN-STRAP]]

var buttonChinWhite = document.getElementById('btnChinWhite');
var black = buttonChinWhite.getContext('2d');
black.beginPath();
black.rect(0, 0, canvas.width, canvas.height);
black.fillStyle = 'yellow';
black.fill();
document.getElementById('btnChinWhite').addEventListener('click', function() {
  context.drawImage(images.chinstrap, 0, 0, canvas.width, canvas.height);
});

// [[GREEN]]

// var buttonGreen = document.getElementById('btnGreen');
// var btn = buttonGreen.getContext('2d');
// btn.beginPath();
// btn.rect(0, 0, canvas.width, canvas.height);
// btn.fillStyle = 'green';
// btn.fill();
// // document.getElementById('btnTEMPLATE').addEventListener('click', function() {
// //   context.drawImage(images.template, 0, 0, canvas.width, canvas.height)
// // });

// [[PURPLE]]

// var buttonPurple = document.getElementById('btnPurple');
// var btn = buttonPurple.getContext('2d');
// btn.beginPath();
// btn.rect(0, 0, canvas.width, canvas.height);
// btn.fillStyle = 'purple';
// btn.fill();
// // document.getElementById('btnTEMPLATE').addEventListener('click', function() {
// //   // context.drawImage(images.template, 0, 0, canvas.width, canvas.height)
// // });



















// //[[[WHITE]]]

// var buttonShell = document.getElementById('btnWhite');
// var btn = buttonShell.getContext('2d');
// btn.beginPath();
// btn.rect(0, 0, canvas.width, canvas.height);
// btn.fillStyle = 'white';
// btn.fill();
// btn.lineWidth = 15;
// btn.strokeStyle = 'black';
// btn.stroke();
// document.getElementById('btnWhite').addEventListener('click', function() {
//   context.drawImage(images.shellWhite, 0, 0, canvas.width, canvas.height);
//   //currentFrame = context. ??
// });





// //[[[GREEN]]]

// var buttonShell = document.getElementById('btnBlue');
// var btn = buttonShell.getContext('2d');
// btn.beginPath();
// btn.rect(0, 0, canvas.width, canvas.height);
// btn.fillStyle = 'blue';
// btn.fill();
// btn.lineWidth = 7;
// btn.strokeStyle = 'black';
// btn.stroke();
// document.getElementById('btnBlue').addEventListener('click', function() {
//   context.drawImage(images.shellBLUE, 0, 0, canvas.width, canvas.height);
//   //currentFrame = context. ??
// });

// //[[[CHROME]]]

// var buttonShell = document.getElementById('btnBlue');
// var btn = buttonShell.getContext('2d');
// btn.beginPath();
// btn.rect(0, 0, canvas.width, canvas.height);
// btn.fillStyle = 'blue';
// btn.fill();
// btn.lineWidth = 7;
// btn.strokeStyle = 'black';
// btn.stroke();
// document.getElementById('btnBlue').addEventListener('click', function() {
//   context.drawImage(images.shellBLUE, 0, 0, canvas.width, canvas.height);
//   //currentFrame = context. ??
// });

         










function startGame() {
      var pad = document.getElementById("myCanvas");

      var clicked = false;

      var screen = new Screen("myCanvas");

      for (var i = 0; i < screen.imgData.data.length; i += 4) {
            screen.imgData.data[i + 0] = Math.floor(Math.random() * 255);
            screen.imgData.data[i + 1] = Math.floor(Math.random() * 255);
            screen.imgData.data[i + 2] = Math.floor(Math.random() * 255);
            screen.imgData.data[i + 3] = 255;
      }

      screen.refresh();


      var squareSize = 100;

      pad.addEventListener('mousemove', (event) => {
            if (clicked) {
                  var ySquare = event.clientX - squareSize / 2;
                  var xSquare = event.clientY - squareSize / 2;

                  for (var x = 0; x < squareSize; x++) {
                        for (var y = 0; y < squareSize; y++) {
                              var r = Math.floor(Math.random() * 255);
                              var g = Math.floor(Math.random() * 255);
                              var b = Math.floor(Math.random() * 255);
                              screen.putPixel(xSquare + x, ySquare + y, r, g, b);
                        }
                  }

                  screen.refresh();
            }

      });


      pad.addEventListener('mousedown', (event) => {
            console.log('click');
            clicked = true;
      });

      pad.addEventListener('mouseup', (event) => {
            console.log('Unclick');
            clicked = false;
      });
}
function startGame() {
      var c = document.getElementById("myCanvas");
      var pad = document.getElementById("clickSurface");

      var clicked = false;

      c.width = document.body.clientWidth - 2;
      c.height = document.body.clientHeight - 7;

      var ctx = c.getContext("2d");
      var imgData = ctx.createImageData(c.width, c.height);

      var i;
      for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i + 0] = Math.floor(Math.random() * 255);
            imgData.data[i + 1] = Math.floor(Math.random() * 255);
            imgData.data[i + 2] = Math.floor(Math.random() * 255);
            imgData.data[i + 3] = 255;
      }

      ycharlie = Math.floor(Math.random() * c.width);
      xcharlie = Math.floor(Math.random() * c.height);
      size = 4;
      thickness = 4;

      var color = false;

      for (i = 0; i < size; i++) {
            for (j = 0; j < thickness * 4; j += 4) {
                  imgData.data[(i + xcharlie) * c.width * 4 + j + ycharlie * 4] = 255;
                  imgData.data[(i + xcharlie) * c.width * 4 + j + ycharlie * 4 + 1] = color ? 0 : 255;
                  imgData.data[(i + xcharlie) * c.width * 4 + j + ycharlie * 4 + 2] = color ? 0 : 255;
                  color = !color;
            }
      }


      var squareSize = 100;


      ctx.putImageData(imgData, 0, 0);

      pad.addEventListener('mousemove', (event) => {
            if (clicked) {
                  var y = ycharlie + 3;
                  var x = xcharlie + 3;

                  for (i = 0; i < squareSize; i++) {
                        for (j = 0; j < squareSize * 4; j += 4) {
                              imgData.data[(i + x) * c.width * 4 + j + y * 4 + 3] = 100;
                        }
                  }
                  ctx.putImageData(imgData, 0, 0);
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
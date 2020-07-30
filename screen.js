var Screen = class {

      constructor(canvasName, width = null, height = null) {
            this.c = document.getElementById(canvasName);

            this.c.width = width ? width : document.body.clientWidth;
            this.c.height = height ? height : document.body.clientHeight - 4;
            this.width = this.c.width;
            this.height = this.c.height;

            this.ctx = this.c.getContext("2d");
            this.imgData = this.ctx.createImageData(this.c.width, this.c.height);

            this.ctx.putImageData(this.imgData, 0, 0);

            this.oldDate = 0;
      }



      putPixel(x, y, r = 255, g = 255, b = 255, t = 255) {
            try {
                  this.imgData.data[x * this.c.width * 4 + y * 4] = r;
                  this.imgData.data[x * this.c.width * 4 + y * 4 + 1] = g;
                  this.imgData.data[x * this.c.width * 4 + y * 4 + 2] = b;
                  this.imgData.data[x * this.c.width * 4 + y * 4 + 3] = t;

                  return true;
            }
            catch{
                  console.log('out of bound');

                  return false;
            }
      }

      getPixel(x, y) {
            var pixel = [0, 0, 0, 0];
            try {
                  pixel[0] = this.imgData.data[x * this.c.width * 4 + y * 4];
                  pixel[1] = this.imgData.data[x * this.c.width * 4 + y * 4 + 1];
                  pixel[2] = this.imgData.data[x * this.c.width * 4 + y * 4 + 2];
                  pixel[3] = this.imgData.data[x * this.c.width * 4 + y * 4 + 3];

                  return pixel;
            }
            catch{
                  console.log('out of bound');

                  return null;
            }
      }

      refresh(repeat = false) {
            if (repeat) {
                  var time = new Date();
                  var timeNumber = time.getTime();
                  console.log((timeNumber - this.oldDate));
                  if ((timeNumber - this.oldDate) > 30) {
                        this.ctx.putImageData(this.imgData, 0, 0);
                        this.oldDate = timeNumber;
                  }
            }
            else {
                  this.ctx.putImageData(this.imgData, 0, 0);
            }

      }

}
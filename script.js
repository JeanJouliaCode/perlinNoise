function startGame() {
      var pad = document.getElementById("myCanvas");

      var clicked = false;

      var screen = new Screen("myCanvas");
      var perlin = new Perlin(screen.height, screen.width);

      var perlinResult = perlin.generate(10);

      for (var x = 0; x < screen.height; x++) {
            for (var y = 0; y < screen.width; y++) {
                  screen.putPixel(x, y, perlinResult[x][y]);
            }
      }

      screen.refresh();

}
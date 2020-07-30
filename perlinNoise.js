var Perlin = class {
      constructor(height, width) {
            this.height = height;
            this.width = width;
            this.table = []
            for (var i = 0; i < height; i++) {
                  this.table.push([])
                  for (var j = 0; j < width; j++) {
                        this.table[i].push(0);
                  }
            }
      }

      generate(nbSquare) {
            var tablePerlin = [];

            var heightOffset = nbSquare - this.height % nbSquare;
            var widthOffset = nbSquare - this.width % nbSquare;

            for (var i = 0; i < this.height + heightOffset; i++) {
                  tablePerlin.push([])
                  for (var j = 0; j < this.width + widthOffset; j++) {
                        tablePerlin[i].push(2);
                  }
            }

            return tablePerlin;
      }

      generateVectorTable() {
            var VectorTable = [];

            var vectorPosibility = [[0, 1],
            [0.5, 0.86602],
            [0.86602, 0.5],
            [1, 0],
            [0.86602, -0.5],
            [0.5, -0.86602],
            [0, -1],
            [-0.5, -0.86602],
            [-0.86602, -0.5],
            [-1, 0]
            [-0.86602, 0.5],
            [-0.5, 0.86602]];

            for (var i = 0; i < (this.height + heightOffset) / 5 + 1; i++) {
                  VectorTable.push([])
                  for (var j = 0; j < (this.width + widthOffset) / 5 + 1; j++) {
                        VectorTable[i].push(vectorPosibility[Math.floor(Math.random() * (vectorPosibility.length - 1))]);
                  }
            }

            return VectorTable;
      }


}
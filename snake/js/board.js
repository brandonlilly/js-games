(function(){

  SnakeGame = window.SnakeGame || {};

  var Board = SnakeGame.Board = function(xDim, yDim) {
    this.snake = new SnakeGame.Snake();
    this.grid = [];
    this.xDim = xDim;
    this.yDim = yDim;

    this.makeGrid();

  };

  Board.prototype.makeGrid = function() {
    this.grid = new Array(this.yDim);

    for (var i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array(this.xDim);
    }
  };

  Board.prototype.render = function() {
    var snake = this.snake;
    var output = "";
    for(var i = 0; i < this.grid.length; i++) {
      for(var j = 0; j < this.grid[0].length; j++) {
        var coord = new SnakeGame.Coord(j, i);
        output += this.snake.collidedWith(coord) ? "#" : ".";
      }
      output += "<br>";
    }
    return output;
  };

})();

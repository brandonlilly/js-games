(function(){

  SnakeGame = window.SnakeGame || {};

  var Coord = SnakeGame.Coord;

  var Snake = SnakeGame.Snake = function() {
    this.dir = 'E';
    this.segments = [new Coord(3, 3), new Coord(3, 2), new Coord(3, 1), new Coord(3, 0), new Coord(3,2)];
  };

  Snake.DIRS = {
    N: [0, -1],
    E: [1,  0],
    S: [0,  1],
    W: [-1, 0]
  };

  Snake.prototype.move = function() {
    this.segments.pop();
    var head = this.segments[0];
    var dir = Snake.DIRS[this.dir];
    this.segments.unshift(head.plus(dir));
  };

  Snake.prototype.turn = function(dir) {
    this.dir = dir;
  };

  Snake.prototype.collidedWith = function(coord) {
    for(var i = 0; i < this.segments.length; i++) {
      if (this.segments[i].equals(coord)){
        return true;
      }
    }
    return false;
  };

})();

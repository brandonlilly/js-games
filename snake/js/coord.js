(function(){

  SnakeGame = window.SnakeGame || {};

  var Coord = SnakeGame.Coord = function(x, y) {
    this.x = x;
    this.y = y;
  };

  Coord.prototype.equals = function(otherCoord) {
    return otherCoord.x === this.x && otherCoord.y === this.y;
  };

  Coord.prototype.plus = function(coord) {
    if( coord instanceof Coord ) {
      return new Coord(this.x + coord.x, this.y + coord.y);
    }
    return new Coord(this.x + coord[0], this.y + coord[1]);
  };

  Coord.prototype.setTo = function(x, y) {
    if( x instanceof Coord ) {
      this.x = x.x;
      this.y = x.y;
      return this;
    }
    this.x = x;
    this.y = y;
    return this;
  };

})();

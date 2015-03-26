(function(){

  SnakeGame = window.SnakeGame || {};

  var View = SnakeGame.View = function($el){
    this.$display = $el;
    $el.attr("tabindex", 0);
    this.board = new SnakeGame.Board(15, 15);
    this.setupBoard();
    this.registerEvents();

    setInterval(this.step.bind(this), 250);
  };

  View.prototype.setupBoard = function() {
    var html ="";
    for (var i = 0; i < this.board.yDim; i++) {
      html += '<div class="row clearfix">';
      for (var j = 0; j < this.board.xDim; j++) {
        html += '<div class="cell" data-coords="['+ [i, j] +']"></div>';
      }
      html += '</div>';
    }
    this.$display.append(html);
  };

  View.prototype.render = function() {
    var snake = this.board.snake;
    var $rows = this.$display.children(".row");

    this.$display.find(".cell").removeClass("snake-segment");

    snake.segments.forEach(function(segment){
      var $row = $($rows[segment.y]);
      var $cells = $row.children(".cell");
      var $cell = $($cells[segment.x]);
      $cell.addClass("snake-segment");
    }.bind(this));

  };

  View.prototype.step = function(){
    this.board.snake.move();
    this.render();
  };

  View.prototype.registerEvents = function(){
    var snake = this.board.snake;
    this.$display.keydown(function(event){
      var codes = {
        87: 'N',
        65: 'W',
        83: 'S',
        68: 'E'
      };
      var dir = codes[event.keyCode];
      if (dir) {
        snake.turn(dir);
      }
    });
  };

})();

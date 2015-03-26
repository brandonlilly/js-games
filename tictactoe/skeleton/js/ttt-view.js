(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$display = $el;
    this.setupBoard();
    this.bindEvents();
  };

  View.prototype.bindEvents = function () {
    this.$display.on('click', '.cell', function(event){
      var $square = $(event.currentTarget);
      this.makeMove($square);
    }.bind(this));
  };

  View.prototype.makeMove = function ($square) {
    var pos = $square.data("pos");
    var player = this.game.currentPlayer;
    try {
      this.game.playMove(pos);
      $square.addClass("clicked");
      $square.addClass(player);
      $square.html(player);
      if ( this.game.winner() ) {
        this.$display.find('.cell').addClass('clicked');
        this.$display.after('<div class="win-message">You win, ' + player + '!</div>');
      }
    }
    catch (e) {
      alert(e.msg);
    }
  };

  View.prototype.setupBoard = function () {
    var html = "";
    for(var i = 0; i < 3; i++){
      html += '<div class="row clearfix">'
      for(var j = 0; j < 3; j++){
        var pos = [i, j]
        html += '<div class="cell" data-pos="[' + pos + ']"></div>'
      }
      html += '</div>';
    }
    this.$display.append(html);
  };
})();

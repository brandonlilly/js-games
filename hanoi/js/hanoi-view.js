(function(){
  if(typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function(game, $el) {
    this.game = game;
    this.$display = $el;
    this.selectedTower = null;

    this.setupTowers();
    this.$display.on('click', '.tower', this.clickTower.bind(this) );
    this.render();
  };

  View.prototype.clickTower = function(event) {
    var $tower = $(event.currentTarget);
    var towerid = $tower.data('towerid');

    if (this.selectedTower === null) {
      this.selectedTower = towerid;
    } else {
      if ( !this.game.move(this.selectedTower, towerid) ) {
        alert('Invalid move');
      }
      this.selectedTower = null;
    }

    this.render();

    if ( this.game.isWon() ) {
      $tower.children('.disc').css('background', 'lightgreen');
      this.$display.off('click');
      alert('Good work!');
    }
  };

  View.prototype.setupTowers = function() {
    var towers = "";
    for (var i = 0; i < 3; i++) {
      towers += '<div class="tower" data-towerid="' + i + '">';
      for (var j = 0; j < 3; j++) {
        towers += '<div class="disc"></div>';
      }
      towers += '</div>';
    }
    this.$display.append(towers);
  };

  View.prototype.render = function() {
    var $towers = $('.tower');

    var sizes = {
      1: "small-disc",
      2: "medium-disc",
      3: "large-disc"
    };

    var game = this.game;
    $towers.each(function(i){
      var $tower = $(this);

      $tower.removeClass('selected');
      if ( this.selectedTower === i ){
        $tower.addClass('selected');
      }

      var $discs = $tower.children(".disc");
      $discs.removeClass('large-disc small-disc medium-disc');
      [].reverse.call($discs);
      $discs.each(function(j){
        $(this).addClass(sizes[game.towers[i][j]]);
      });
    });
  };


})();

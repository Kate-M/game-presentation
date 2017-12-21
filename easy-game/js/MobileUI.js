
function MobileUI(game) {
    
    this.init = function (onLeft, onRight, onUp, onDown) {
        this.buttons = game.add.group();
        this.buttons.enableBody = true;
        this.buttons.physicsBodyType = Phaser.Physics.ARCADE;

        this.leftButton = game.add.button(width - 190, height - 125, 'LeftButton', onLeft, game, 2, 1, 0);
        this.rightButton = game.add.button(width - 80, height - 125, 'RightButton', onRight, game, 2, 1, 0);
        this.upButton = game.add.button(width - 135, height - 170, 'UpButton', onUp, game, 2, 1, 0);
        this.downButton = game.add.button(width - 135, height - 80, 'DownButton', onDown, game, 2, 1, 0);
        this.initialized = true;
    }

    this.bringToTop = function () {
        if (!this.initialized) return;

        game.world.bringToTop(this.rightButton);
        game.world.bringToTop(this.leftButton);
        game.world.bringToTop(this.upButton);
        game.world.bringToTop(this.downButton);
    }
}
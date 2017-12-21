var customMethods = {
    createNewButton: function (x, y, key, callback, context, fixed = true, onInputEvent = null, anchorX = 0.5, anchorY = 0.5) {
        var button = Wrap.game.add.button(x, y, key, callback, context, 0, 1, 2, 3);
        button.anchor.setTo(anchorX, anchorY);
        if (onInputOverEvent != null) {
            button.onInputOver.add(onInputOverEvent, context);
        }
        button.fixedToCamera = fixed;
        return button;
    },
    createNewGroup: function (limit, key, physicsEnabled = true, frame = 0, exists = false, anchorX = 0.5, anchorY = 0.5) {
        var group = Wrap.game.add.group();
        group.enableBody = physicsEnabled;
        group.createMultiple(limit, key, frame, exists);
        group.setAll("anchor.x", anchorX);
        group.setAll("anchor.y", anchorY);
        return group;
    },
    createRandomMove: function (player, loop, boss, range, minTop, speed) {
        var move = Wrap.game.time.events.loop(loop, function () {
            Wrap.game.add.tween(boss).to({
                x: player.x,
                y: Wrap.game.world.randomY * range + minTop
            }, speed, Phaser.Easing.Quadratic.InOut, true);
        }, this);
        return move;
    }
};

'use strict';
var Wrap = Wrap || {};
// var configuration = {
//     width: 800,
//     height: 600,
//     renderer: Phaser.CANVAS
//  }
var width = window.innerWidth;
var height = window.innerHeight;

Wrap.game = new Phaser.Game(width, height, Phaser.CANVAS);
Wrap.game.state.add("Launcher", Wrap.launcher);
Wrap.game.state.add("LoadingScreen", Wrap.loadingScreen);
Wrap.game.state.add("Gameplay", Wrap.gameplay);

Wrap.game.state.start("Launcher");



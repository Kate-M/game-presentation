'use strict';
var Wrap = Wrap || {};
Wrap.loadingScreen = function (game) { };
Wrap.loadingScreen.prototype = {
    preload: function () {
        this.load.image("Fon", "images/bg.jpg");
        this.load.image("Pointer", "images/aim.png");
        this.load.image('Bullet', "images/snow_ball.png");
        this.load.image('HealthFull', "images/health_full.png");
        this.load.image('HealthEmpty', "images/health_empty.png");
        this.load.image('Life', "images/life.png");
        this.load.image('RightButton', "images/right-arrow.png");
        this.load.image('LeftButton', "images/left-arrow.png");
        this.load.image('UpButton', "images/top-arrow.png");
        this.load.image('DownButton', "images/down-arrow.png");

        this.load.spritesheet('Candy', "images/candy.png", 66, 75, 10);
        this.load.spritesheet('Enemy', 'images/enemy.png', 165, 200, 10);
        this.load.spritesheet('SmallBoss', "images/small_boss.png", 200, 273, 4);
        this.load.spritesheet('BigBoss', "images/big_boss.png", 200, 252, 2);
        this.load.spritesheet("Player", "images/eric.png", 200, 192, 13);
        this.load.spritesheet("Blood", "images/blood.png", 60, 60, 4);

        this.load.audio('Music', 'audio/main_music.mp3');
        this.load.audio('Killed', 'audio/die.mp3');
        this.load.audio('Damage', 'audio/damage.mp3');
        this.load.audio('Fight', 'audio/fight.mp3');
        this.load.audio('Wound', 'audio/hit.mp3');
        this.load.audio('Won', 'audio/na_na.mp3');
        this.load.audio('Goal', 'audio/goal.mp3');
        this.load.audio('DeathSmallBoss', 'audio/kenny_dies.mp3');
        this.load.audio('BigBossSong', 'audio/thriller_song.mp3');
        this.load.audio('BigBoss', 'audio/in_chief.mp3');
        this.load.audio('Cry', 'audio/cry.mp3');
        this.load.audio('Laughing', 'audio/kenny_laughing.mp3');
        this.load.audio('Candy', 'audio/take_candy.mp3');
        //x,y, key, index,group -game sprites
        this.logo = this.add.sprite(this.game.width * 0.5, this.game.height * 0.5, "Logo");
        this.emptyBar = this.add.sprite(this.game.width * 0.5, (this.game.height * 0.5) + 123, "LoadingBars");
        this.fullBar = this.add.sprite(this.emptyBar.x, this.emptyBar.y, "LoadingBars", 1);
        this.percentage = this.add.text(this.emptyBar.x, (this.emptyBar.y + 3), "0%", { font: "32px 'SouthPark'", fill: "#000" })

        this.logo.anchor.setTo(0.5);
        this.emptyBar.anchor.setTo(0.5);
        this.fullBar.anchor.setTo(0.5);
        this.percentage.anchor.setTo(0.5);

    },
    create: function () {
        this.state.start("Gameplay");
    },
    loadUpdate: function () {
        this.percentage.text = this.load.progress + "%", { font: "32px SouthPark", fill: "#000" };
    }
};
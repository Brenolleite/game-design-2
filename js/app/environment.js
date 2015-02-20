define(['app/config', 'app/platform'],
function(config, platform) {

    "use strict";

    var Environment = function() {}

    Environment.prototype.build = function(game)
    {
        game.physics.startSystem(Phaser.Physics.ARCADE)

        this.game = game;
        this.backdrop = game.add.tileSprite(0, 0, 5000, config.game.height,
            'background');

        platform.init(game);
        platform.create(
            { x: 0, y: config.game.height - 200 },
            { height: 200, width: config.game.width },
            'ground', true);
    }

    Environment.prototype.getPlatform = function()
    {
        return platform;
    }

    Environment.prototype.move = function(direction, platforms)
    {
        this.backdrop.x -= direction;
        platforms.move(direction);
    }

    return new Environment();

});

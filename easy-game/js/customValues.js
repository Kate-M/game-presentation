var customValues = {
    playerMovementSpeed: 200,
    playerMovementSpeedMobile: 600,
    playerFireRate: 200,
    bulletProjectileSpeed: 600,
};

function EnemyFactory() {
    this.enemiesTotal = {
        turkey: 40,
        kenny: 1,
        chief: 1
    };

    this.remaining = JSON.parse(JSON.stringify(this.enemiesTotal));

    this.createNext = function () {
        for (var key in this.enemiesTotal) {
            if (this.remaining[key] > 0) {
                this.remaining[key]--;
                return key;
            }
        }
    }
}
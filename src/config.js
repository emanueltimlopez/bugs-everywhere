import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  resolution: window.devicePixelRatio,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 500 },
        debug: false
    }
},
};
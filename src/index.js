import 'phaser';
import config from './config';
import GameScene from './scenes/GameScene';
import MenuScene from './scenes/MenuScene';
import ResultScene from './scenes/ResultScene';
import BootScene from './scenes/BootScene';

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Menu', MenuScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Result', ResultScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
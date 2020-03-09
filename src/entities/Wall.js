import 'phaser';

export default class Wall extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, options) {
    super(scene, x, y, 'wall');
    this.scene = scene;
    this.scene.add.existing(this);

    this.displayHeight = 25;
    this.height = 25;
  }
}
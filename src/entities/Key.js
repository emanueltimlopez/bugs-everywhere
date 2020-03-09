import 'phaser';

export default class Key extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, options) {
    super(scene, x, y, 'key');
    this.scene = scene;
    this.physics = scene.physics;
    this.scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.allowGravity = false;

    this.displayHeight = 25;
    this.displayWidth = 40;
    this.height = 25;
  }
}
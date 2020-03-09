import 'phaser';

export default class Door extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, options) {
    super(scene, x, y, 'door');
    this.scene = scene;
    this.physics = scene.physics;
    this.scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.allowGravity = false;

    this.displayHeight = 45;
    this.displayWidth = 35;
    this.height = 45;
  }
}
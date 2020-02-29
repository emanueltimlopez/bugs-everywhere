export default class Player extends Phaser.Arcade.Sprite {
  constructor(scene, x, y, options) {
    super(scene, x, y, 'player');
    this.scene = scene;
    this.scene.add.existing(this);

    this.displayHeight = 120;
    this.displayWidth = 120;
    this.height = 120;
    this.width = 120;

    this.moveUp = this.moveUp.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveDown = this.moveDown.bind(this);
  }

  moveUp(pointer) {

  }

  moveLeft() {

  }

  moveRight() {

  }

  moveDown() {

  }

  getPosition() {
    return {
      x: this.x,
      y: this.y
    }
  }

  _bounceVelocity(actual, after) {
    this.setVelocityX(actual);
  }
}

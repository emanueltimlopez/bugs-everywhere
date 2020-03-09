export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.scene = scene;
    this.physics = scene.physics;
    this.scene.add.existing(this);
    scene.physics.world.enable(this);

    this.initialPosition = { x, y };
    this.displayHeight = 30;
    this.displayWidth = 30;
    this.height = 30;
    this.width = 30;
    this.setBounce(0.2);

    this.resetSuperMovement = false;

    this.update = this.update.bind(this);
    this.superMovementRigth = this.superMovementRigth.bind(this);
    this.superMovementLeft = this.superMovementLeft.bind(this);
  }

  superMovementRigth() {
    if (!this.resetSuperMovement) {
      this.x -= 100;
      this.resetSuperMovement = true;
    }
  }

  superMovementLeft() {
    if (!this.resetSuperMovement) {
      this.x += 100;
      this.resetSuperMovement = true;
    }
  }

  update(cursors) {
    if (cursors.left.isDown){
      this.setVelocityX(50);
    } else if (cursors.right.isDown) {
      this.setVelocityX(-50);
    } else {
      this.setVelocityX(0);
    }

    if (cursors.down.isDown && this.body.touching.down) {
      this.setVelocityY(-300);
    }

    if (this.body.touching.down) {
      this.resetSuperMovement = false;
    }

    if (this.y > 700) {
      this.x = this.initialPosition.x;
      this.y = this.initialPosition.y;
    }
  }
}

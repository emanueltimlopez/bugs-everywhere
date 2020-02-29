import 'phaser';
import AlignGrid from '../utils/alignGrid'
import Player from '../entities/Player';
import Map from '../entities/Map';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');

    this._movePlayerUp = this._movePlayerUp.bind(this);
    this._movePlayerLeft = this._movePlayerLeft.bind(this);
    this._movePlayerRight = this._movePlayerRight.bind(this);
    this._movePlayerDown = this._movePlayerDown.bind(this);
  }

  create() {
    this.cameras.main.backgroundColor.setTo(0, 0, 0);

    this.input.keyboard.on('keydown-' + 'W', this._movePlayerUp);
    this.input.keyboard.on('keydown-' + 'A', this._movePlayerLeft);
    this.input.keyboard.on('keydown-' + 'D', this._movePlayerRight);
    this.input.keyboard.on('keydown-' + 'S', this._movePlayerDown);

    const aGrid = new AlignGrid({
      'scene': this,
      'cols': 5,
      'rows': 5
    });
    //aGrid.showNumbers();

    this.map = new Map(this.physics.world, this);

    this.player = new Player(this, 330, 330, null, this.physics);

    this.cameras.main.startFollow(this.player);
    this.physics.add.collider(this.map, this.player);
  }

  _movePlayerUp() {
    this.player.moveUp();
  }

  _movePlayerLeft() {
    this.player.moveLeft();
  }

  _movePlayerRight() {
    this.player.moveRight();
  }

  _movePlayerDown() {
    this.player.moveDown();
  }

  update() {
    this.map.setPlayerPosition(this.player.getPosition());
  }
}
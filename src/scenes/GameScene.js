import 'phaser';
import AlignGrid from '../utils/alignGrid'
import Player from '../entities/Player';
import Map from '../entities/Map';
import Key from '../entities/Key';
import Door from '../entities/Door';
import levels from '../levels';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');

    this._superMovementRigth = this._superMovementRigth.bind(this);
    this._superMovementLeft = this._superMovementLeft.bind(this);
    this._getKey = this._getKey.bind(this);
    this._getDoor = this._getDoor.bind(this);
  }

  init(data){
    this.currentLevel = data.currentLevel;
  }

  create() {
    this.cameras.main.backgroundColor.setTo(1,0,171);

    this.registry.events.on('changedata', this._updateData, this);
    this.sys.events.once('shutdown', this._shutdown, this);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on('keydown-' + 'W', this._superMovementRigth);
    this.input.keyboard.on('keydown-' + 'Q', this._superMovementLeft);

    this.map = new Map(this, { map: levels[this.currentLevel].map });
    this.player = new Player(this, levels[this.currentLevel].player.x, levels[this.currentLevel].player.y);
    this.physics.add.collider(this.map, this.player);

    this.key = new Key(this, levels[this.currentLevel].key.x, levels[this.currentLevel].key.y);
    this.door = new Door(this, levels[this.currentLevel].door.x, levels[this.currentLevel].door.y);

    this.physics.add.overlap(this.player, this.key, this._getKey);
    this.physics.add.overlap(this.player, this.door, this._getDoor);
    this.registry.set('getDoor', false);
    this.registry.set('lifes', 3);

    const text = this.add.text(55, 15, 'Use [null, null, null] for movement - Q W for super movement',
      { fontFamily: 'EbitMadness', fontSize: 25, color: '#ffffff' })
      .setOrigin(0);
  }

  update() {
    this.player.update(this.cursors);
  }

  _updateData(_, key, value) {

  }

  _shutdown() {
    this.registry.events.off('changedata');
  }

  _onLose() {
    this.scene.start('Result', { win: false });
  }

  _getKey() {
    const hasDoor = this.registry.get('getDoor');
    if (hasDoor) {
      if (this.currentLevel === 3) {
        this.scene.start('Result', { win: true });
      } else {
        this.scene.restart({ currentLevel: (this.currentLevel + 1) });
      }
    } else {
      console.log('Get the door first');
    }
  }

  _getDoor() {
    this.registry.set('getDoor', true);
    this.door.destroy();
  }

  _superMovementRigth() {
    this.player.superMovementRigth();
  }

  _superMovementLeft() {
    this.player.superMovementLeft();
  }
}
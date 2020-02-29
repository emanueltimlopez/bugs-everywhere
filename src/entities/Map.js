import 'phaser';
import Wall from './Wall';

export default class Map extends Phaser.Arcade.StaticGroup {
  constructor(world, scene, config) {
    super(world, scene);
    this.scene = scene;

    this._playerPosition = {
      x: 0,
      y: 0
    }
  }

  setPlayerPosition(position) {
    this._playerPosition = position;
  }
}
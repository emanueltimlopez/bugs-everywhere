import 'phaser';
import Wall from './Wall'

export default class Map extends Phaser.Physics.Arcade.StaticGroup {
  constructor(scene, config) {
    super(scene.physics.world, scene);
    this.scene = scene;
    scene.physics.world.enable(this);
    this._map = config.map;

    this._generateWalls();
  }

  _generateWalls() {
    this._map.forEach((row, i) => {
      row.forEach((item, j) => {
        if (item) {
          const wall = new Wall(this.scene, i * 25 + 40, j * 30 + 40);
          this.add(wall);
        }
      });
    });
  }
}
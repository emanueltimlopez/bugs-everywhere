import 'phaser';

export default class ResultScene extends Phaser.Scene {
  constructor () {
    super('Result');

    this._start = this._start.bind(this);
  }

  init(data){
    this.win = data.win;
  }

  create () {
    this.cameras.main.backgroundColor.setTo(1,0,171);

    /*const music = this.sound.add('menu-music')
    music.play({ loop: true });*/

    this.add.text(this.sys.game.config.width / 2, 170, 'You',
      { fontFamily: 'Stencil8bit', fontSize: 80, color: '#ffffff' })
      .setOrigin(0.5);

    this.add.text(this.sys.game.config.width / 2, 245, this.win ? 'Win' : 'Die',
      { fontFamily: 'Stencil8bit', fontSize: 80, color: '#ffffff' })
      .setOrigin(0.5);

    const startButton = this.add.text(this.sys.game.config.width / 2, 400, '< Press ENTER to restart >',
      { fontFamily: 'EbitMadness', fontSize: 30, color: '#ffffff' })
      .setOrigin(0.5);

    this.input.keyboard.on('keydown-' + 'ENTER', this._start);
  }

  _start() {
    //music.stop();
    this.scene.start('Game');
  }

};

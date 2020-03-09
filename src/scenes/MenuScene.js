import 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor () {
    super('Menu');

    this._start = this._start.bind(this);
  }

  create () {
    this.cameras.main.backgroundColor.setTo(1,0,171);

    const music = this.sound.add('menu-music')
    music.play({ loop: true });

    WebFont.load({
      custom: {
        families: [ 'Stencil8bit', 'EbitMadness' ]
      },
      active: () => {
        this.add.text(this.sys.game.config.width / 2, 170, 'Bugs',
          { fontFamily: 'Stencil8bit', fontSize: 80, color: '#ffffff' })
          .setOrigin(0.5);

        this.add.text(this.sys.game.config.width / 2, 245, 'Everywhere',
          { fontFamily: 'Stencil8bit', fontSize: 80, color: '#ffffff' })
          .setOrigin(0.5);

        this.add.text(this.sys.game.config.width / 2, 315, "For win you need to UNDEFINED",
          { fontFamily: 'EbitMadness', fontSize: 30, color: '#ffffff' })
          .setOrigin(0.5);

        const startButton = this.add.text(this.sys.game.config.width / 2, 400, '< Press ENTER to continue >',
          { fontFamily: 'EbitMadness', fontSize: 30, color: '#ffffff' })
          .setOrigin(0.5);
      }
    });

    this.add.text(this.sys.game.config.width - 100, this.sys.game.config.height - 40, 'v.0.1.0',
      { font: "15px Arial", fill: "#ffffff" });

    this.input.keyboard.on('keydown-' + 'ENTER', this._start);
  }

  _start() {
    //music.stop();
    this.scene.start('Game', { currentLevel: 0 });
  }

};

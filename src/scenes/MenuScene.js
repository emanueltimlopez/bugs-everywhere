import 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor () {
    super('Menu');
  }

  create () {
    this.cameras.main.backgroundColor.setTo(255,255,255);

    const music = this.sound.add('menu-music')
    music.play({ loop: true });

    this.add
      .sprite(0, 0, 'bg')
      .setOrigin(0);

    WebFont.load({
      custom: {
        families: [ 'Stencil8bit', '8bitMadness' ]
      },
      active: () => {
        this.add.text(this.sys.game.config.width / 2, 170, 'Bugs',
          { fontFamily: 'Stencil8bit', fontSize: 80, color: '#ffffff' })
          .setOrigin(0.5);

        this.add.text(this.sys.game.config.width / 2, 245, 'Everywhere',
          { fontFamily: 'Stencil8bit', fontSize: 80, color: '#ffffff' })
          .setOrigin(0.5);

        this.add.text(this.sys.game.config.width / 2, 315, 'All is just',
          { fontFamily: '8bitMadness', fontSize: 16, color: '#ffffff' })
          .setOrigin(0.5);

        this.add.text(this.sys.game.config.width / 2, 335, 'broken someones code',
            { fontFamily: '8bitMadness', fontSize: 16, color: '#ffffff' })
            .setOrigin(0.5);

        const startButton = this.add.text(this.sys.game.config.width / 2, 460, 'START',
          { fontFamily: '8bitMadness', fontSize: 35, color: '#ffffff' })
          .setOrigin(0.5)
          .setInteractive({
            useHandCursor: true
          })
          .on('pointerover', () => {
            startButton.setScale(1.2);
          })
          .on('pointerout', () => {
            startButton.setScale(1);
          })
          .on('pointerdown', () => {
            music.stop();
            this.scene.start('Tutorial');
          });
      }
    });

    this.add.text(this.sys.game.config.width - 100, this.sys.game.config.height - 40, 'v.1.0.0',
      { font: "15px Arial", fill: "#000000" });
  }
};
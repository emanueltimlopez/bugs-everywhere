import 'phaser';

export default class TutorialScene extends Phaser.Scene {
  constructor () {
    super('Tutorial');
  }

  create () {
    this.cameras.main.backgroundColor.setTo(255,255,255);
    this.step = 0;

    const music = this.sound.add('menu-music')
    music.play({ loop: true });

    this.input.keyboard.on('keydown-' + 'A', this._next);

    const text = this.add.text(this.sys.game.config.width / 2, 150, 'Hi Richard, Guido here... sorry for',
      { fontFamily: 'Justinian2', fontSize: 20, color: '#ffffff' })
      .setOrigin(0.5);
  }

  _next () {
    if (this.step === 0) {
      text.setText('But the client says is not working...');
    } else if (this.step === 1) {
      text.setText('Please, clean the code, sure is easy...');
    } else if (vstep >= 2) {
      music.stop();
      this.scene.start('Game');
    }
    this.step += 1;
  }
};
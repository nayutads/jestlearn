export default class SoundPlayer {
  foo: string;
  constructor() {
    this.foo = "bar";
  }
  playSoundFile(filename: string) {
    console.log(`Playing sound file ${filename}`);
  }
}

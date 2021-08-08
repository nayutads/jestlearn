import SoundPlayer from "./soundplayer";

export default class SoundPlayerConsumer {
  soundplayer: SoundPlayer;
  constructor() {
    this.soundplayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = "song.mp3";
    this.soundplayer.playSoundFile(coolSoundFileName);
  }
}

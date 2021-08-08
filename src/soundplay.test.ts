import SoundPlayer from "./soundplayer";
import { mocked } from "ts-jest/utils";
import SoundPlayerConsumer from "./soundplayer-consumer";

jest.mock("./soundplayer");

describe("classmocktest", () => {
  const MockedSoundPlayer = mocked(SoundPlayer);

  beforeEach(() => {
    MockedSoundPlayer.mockClear();
  });

  it("consumerテスト", () => {
    const consumer = new SoundPlayerConsumer();
    expect(MockedSoundPlayer).toHaveBeenCalledTimes(1);
  });
});

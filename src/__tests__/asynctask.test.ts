import { fetchdata } from "../asynctask";

describe("async module test", () => {
  it("関数が５秒後にうんちを返す", async () => {
    await expect(fetchdata()).resolves.toBe("うんち!");
  });
});

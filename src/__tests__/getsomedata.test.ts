import { getsomedatas } from "../getsomedata";
const mockCallback = jest.fn((x) => x + 42);
describe("mock function is ok", () => {
  it("いけるかな～?", () => {
    expect(getsomedatas(3, mockCallback)).toBe(77);
  });
});

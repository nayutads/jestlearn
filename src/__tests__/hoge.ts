function manualforeach(items: any[], callback: Function) {
  for (let index = 0; index <= items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn((x) => x + 42);

manualforeach([0, 1], mockCallback);

test("mock", () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

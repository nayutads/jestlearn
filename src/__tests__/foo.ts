import { sum } from "../sum";

test("インポートできるかのテストだよ～～", () => {
  expect(sum(1, 2)).toBe(3);
});

test("オブジェクトのテスト", () => {
  const watson: any = {
    first: "amelia",
    last: "watson",
  };

  expect(watson).toEqual({
    first: "amelia",
    last: "watson",
  });
});

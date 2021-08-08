import { throwException } from "../throwException";
test("例外が投げられるかテスト", () => {
  expect(() => throwException(true)).toThrow(Error); //wrapping functionにinvokeしないとtoThrowはパスされない
});

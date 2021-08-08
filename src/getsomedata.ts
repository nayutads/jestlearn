export function getsomedatas(
  param: number,
  callback: (data: number) => number
) {
  let data = 32 + param;
  return callback(data);
}

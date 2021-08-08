export function fetchdata(): Promise<string> {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved("うんち!");
    }, 5000);
  });
}

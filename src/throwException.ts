export function throwException(isEnabled: boolean) {
  if (isEnabled) throw new Error("Exception is threw");
}

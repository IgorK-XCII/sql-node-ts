export const stringToBoolean = (str: string): boolean => {
  if (!/^1|0$/.test(str)) throw new Error('This string unsupported');
  return /^1$/.test(str);
};

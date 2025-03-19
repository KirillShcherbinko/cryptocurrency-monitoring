// Округление чисел
export const rounded = (num: number, decimals: number): number => {
  return Math.round(num * 10 ** decimals) / 10 ** decimals;
};

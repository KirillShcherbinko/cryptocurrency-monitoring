// Округление чисел
export const rounded = (num: number, decimals: number): number => {
  return Math.round(num * 10 ** decimals) / 10 ** decimals;
}

// Получение значение из диапазона
export const isAppropriateValue = (
  value: unknown,
  minValue: number,
  maxValue: number
): boolean => {
  const numericValue: number = Number(value)
  return !isNaN(numericValue) && minValue <= numericValue && numericValue <= maxValue;
}

// Подсчёт прогресса на дипазоне с шагом
export const countProgress = (value: number, min: number, max: number): number => {
  return 100 * (value - min) / (max - min);
}
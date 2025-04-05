import { CurrencySymbolType, CurrencyType } from "../types";

// Округление чисел
export const rounded = (num: number, decimals: number): number => {
  return Math.abs(Math.round(num * 10 ** decimals) / 10 ** decimals);
};

// Получение символа валюты
export const getCurrencySymbol = (
  currency: CurrencyType
): CurrencySymbolType => {
  switch (currency) {
    case "usd":
      return "$";
    case "rub":
      return "₽";
    case "eur":
      return "€";
    default:
      throw new Error("Invaid currency");
  }
};

// Получение значение из диапазона
export const isAppropriateValue = (
  value: unknown,
  minValue: number,
  maxValue: number
): boolean => {
  const numericValue: number = Number(value)
  return !isNaN(numericValue) && minValue <= numericValue && numericValue <= maxValue;
};

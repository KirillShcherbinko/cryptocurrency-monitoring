import { ICryptoData } from "../modules/CryptoMarket/types";

// Округление чисел
export const rounded = (num: number, decimals: number): number => {
  return Math.round(num * 10 ** decimals) / 10 ** decimals;
};

// Преобразование полученных данных к camelCase
const toCamelCase = (str: string) =>
  str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

export const convertJsonKeysToCamelCase = (json: ICryptoData) => {
  const jsonString = JSON.stringify(json);

  const updatedString = jsonString.replace(/"([^"]+)":/g, (_, key) => {
    return `"${toCamelCase(key)}":`;
  });

  return JSON.parse(updatedString);
};

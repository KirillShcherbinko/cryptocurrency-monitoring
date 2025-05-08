import { CryptoParamsType } from "../types";

// Константы для валют
export const currencyItems = {
  usd: "$ USD",
  rub: "₽ RUB",
  eur: "€ EUR",
};

// Константы для возрастания и убывания
export const changeItems = {
  asc: "Ascending",
  desc: "Descending",
};

// Константы для сортировки
export const orderItems = {
  market_cap: "Market cap",
  volume: "Volume",
  id: "Name",
};

// Константы для числа записей на странице
export const MIN_PER_PAGE_VALUE = 3;
export const MAX_PER_PAGE_VALUE = 24;
export const PER_PAGE_STEP = 3;

// Константы для номеров страниц
export const MIN_PAGE_NUMBER = 1;
export const MAX_PAGE_NUMBER = 5500;

// Константы для глобального состояния модуля
export const initialParams: CryptoParamsType = {
  currency: "usd",
  perPage: 12,
  pageNumber: 1,
  order: "market_cap_desc",
};

export const initialState = {
  cryptoData: [],
  filterKey: null,
  cryptoFilteredData: [],
  cryptoParams: initialParams,
};

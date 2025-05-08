import { TimeScaleOptions, CartesianScaleOptions } from "chart.js";
import { TypedScale } from "../../../UI/LineChart/LineChart";

////////// Символ валюты //////////
export type CurrencySymbol = "$" | "₽" | "€";

////////// Типы для параметров //////////
export type CurrencyType = "usd" | "rub" | "eur";
export type ChangeType = "asc" | "desc";
export type OrderType = "market_cap" | "volume" | "id";

export type SortType =
  | "market_cap_asc"
  | "market_cap_desc"
  | "volume_asc"
  | "volume_desc"
  | "id_asc"
  | "id_desc";

export interface CryptoParamsType {
  currency: CurrencyType;
  perPage: number;
  pageNumber: number;
  order: SortType;
}

////////// Типы для графиков //////////
export type XAxisConfig = TypedScale<"time", TimeScaleOptions>;
export type YAxisConfig = TypedScale<"linear", CartesianScaleOptions>;

////////// Типы для данных //////////
export interface CryptoDataType {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: {
    price: number[];
  };
  currency: string;
}

////////// Типы для состояний //////////
export type CryptoMarketStateType = {
  cryptoData: CryptoDataType[];
  filterKey: keyof CryptoDataType | null;
  cryptoFilteredData: CryptoDataType[];
  cryptoParams: CryptoParamsType;
};

type CryptoDataStateType = {
  type: "set_crypto_data";
  payload: CryptoDataType[];
};

type CryptoFilterDataStateType = {
  type: "set_filtered_crypto_data";
  payload: {
    key: keyof CryptoDataType;
    value: string;
  };
};

type CryptoParamsStateType = {
  type: "set_crypto_params";
  payload: CryptoParamsType;
};

export type CryptoMarketActionType =
  | CryptoDataStateType
  | CryptoFilterDataStateType
  | CryptoParamsStateType;

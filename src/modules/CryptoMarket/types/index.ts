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

export interface CryptoParams {
  currency: CurrencyType;
  perPage: number;
  pageNumber: number;
  order: SortType;
}

////////// Типы для графиков //////////
export type XAxisConfig = TypedScale<"time", TimeScaleOptions>;
export type YAxisConfig = TypedScale<"linear", CartesianScaleOptions>;

////////// Типы для данных //////////
export interface CryptoData {
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
export type CryptoMarketState = {
  cryptoData: CryptoData[];
  filterKey: keyof CryptoData | null;
  cryptoFilteredData: CryptoData[];
  cryptoParams: CryptoParams;
};

type CryptoDataState = {
  type: "set_crypto_data";
  payload: CryptoData[];
};

type CryptoFilterDataState = {
  type: "set_filtered_crypto_data";
  payload: {
    key: keyof CryptoData;
    value: string;
  };
};

type CryptoParamsState = {
  type: "set_crypto_params";
  payload: CryptoParams;
};

export type CryptoMarketAction =
  | CryptoDataState
  | CryptoFilterDataState
  | CryptoParamsState;

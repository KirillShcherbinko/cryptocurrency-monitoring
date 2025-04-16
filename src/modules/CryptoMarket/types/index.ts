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

export interface ICryptoData {
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

export interface ICryptoParams {
  currency: CurrencyType;
  perPage: number;
  pageNumber: number;
  order: SortType;
}

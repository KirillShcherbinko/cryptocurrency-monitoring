export type CurrencyType = 'usd' | 'rub' | 'eur';
export type OrderType = 'market_cap' | 'volume' | 'id';

export interface ICryptoData {
  id: string,
  symbol: string,
  name: string,
  image: string,
  current_price: number,
  market_cap: number,
  market_cap_rank: number,
  total_volume: number,
  price_change_percentage_24h: number,
  sparkline_in_7d: {
    price: number[];
  };
  currency: string;
}

export interface ICryptoParams {
  currency: CurrencyType;
  cryptoPerPage: number;
  pageNumber: number;
  order: OrderType;
}

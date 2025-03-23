export type CurrencyType = 'usd' | 'rub' | 'eur';

export type OrderType = 'market_cap_asc'
  | 'market_cap_desc'
  | 'volume_asc'
  | 'volume_decs'
  | 'id_asc'
  | 'id_desc'

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
  sparklineIn7d: {
    price: number[];
  };
}

export interface ICryptoParams {
  currency: CurrencyType;
  cryptoPerPage: number;
  pageNumber: number;
  order: OrderType;
}

export type PercentageColor = 'red' | 'white' | 'green';

export interface ICryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: number;
  priceChangePercentage: number;
  sparkline: number[];
}

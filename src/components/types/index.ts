export type PercentageColor = '#A13D2F' | '#2FA15D';
export type PercentageArrow = 'income' | 'expenses';

export interface ICryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: number;
  priceChangePercentage: number;
  sparkline: number[];
}

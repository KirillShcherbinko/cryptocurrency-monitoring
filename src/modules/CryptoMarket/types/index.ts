export interface ICryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: number;
  marketCapRank: number;
  priceChangePercentage: number;
  sparkline: number[];
}
import axios from "axios";
import { BASE_URL } from "../../../api/constants";
import { CryptoData } from "../types";

export default async function fetchCryptoMarketData(
  currency: string,
  perPage: number,
  pageNumber: number,
  order: string
): Promise<CryptoData[]> {
  const config = {
    params: {
      vs_currency: currency,
      per_page: perPage,
      page: pageNumber,
      order: order,
      sparkline: true,
    },
  };
  const response = await axios.get<CryptoData[]>(
    `${BASE_URL}/coins/markets`,
    config
  );
  const data: CryptoData[] = response.data;
  return data;
}

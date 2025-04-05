import axios from "axios";
import { BASE_URL } from "../../../api/constants";
import { ICryptoData } from "../types";

export default async function fetchCryptoMarketData(
  currency: string,
  cryptoPerPage: number,
  pageNumber: number,
  order: string
): Promise<ICryptoData[]> {
  const config = {
    params: {
      vs_currency: currency,
      per_page: cryptoPerPage,
      page: pageNumber,
      order: order,
      sparkline: true,
    },
  };
  const response = await axios.get<ICryptoData[]>(`${BASE_URL}/coins/markets`, config);
  const data: ICryptoData[] = response.data;
  return data;
}

import axios from "axios";
import { BASE_URL } from "../../../api/constants";
import { CryptoDataType } from "../types";

export default async function fetchCryptoMarketData(
  currency: string,
  perPage: number,
  pageNumber: number,
  order: string
): Promise<CryptoDataType[]> {
  const config = {
    params: {
      vs_currency: currency,
      per_page: perPage,
      page: pageNumber,
      order: order,
      sparkline: true,
    },
  };
  const response = await axios.get<CryptoDataType[]>(
    `${BASE_URL}/coins/markets`,
    config
  );
  const data: CryptoDataType[] = response.data;
  return data;
}

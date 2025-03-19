import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";
import { PERCENTAGE_DECIMALS, PRICE_DECIMALS } from "../constants/decimalsConstants";
import { ICryptoData } from "../../../components/types";
import { rounded } from "../../../utils";

export default async function fetchCryptoMarketData(
  currency: string,
  cryptoPerPage: number,
  pageNumber: number
) {
  try {
    const config = {
      params: {
        vs_currency: currency,
        per_page: cryptoPerPage,
        page: pageNumber,
        sparkline: true,
      },
    };
    const response = await axios.get(`${BASE_URL}/coins/market`, config);
    const data: ICryptoData[] = response.data.map((item: any) => {
      return {
        id: item.id,
        symbol: item.symbol,
        name: item.name,
        image: item.image,
        currentPrice: rounded(item.current_price, PRICE_DECIMALS),
        priceChangePercentage: rounded(item.price_change_percentage_24h, PERCENTAGE_DECIMALS),
        sparkline: item.sparkline_in_7d.price,
      }
    });
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

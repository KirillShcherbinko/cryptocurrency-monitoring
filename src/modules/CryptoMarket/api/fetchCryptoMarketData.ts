import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";

export default async function fetchCryptoMarketData(
  currency: string,
  cryptoNumber: number
) {
  try {
    const config = {
      params: {
        currency: currency,
        cryptoNumber: cryptoNumber,
        sparkline: true,
      },
    };
    const data = await axios.get(`${BASE_URL}/coins/market`, config);
    return data;
  } catch (err) {
    console.log(err);
  }
}

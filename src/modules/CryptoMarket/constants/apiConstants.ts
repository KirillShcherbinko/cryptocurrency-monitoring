import { CryptoParams } from "../types";

export const initialState: CryptoParams = {
  currency: "usd",
  perPage: 12,
  pageNumber: 1,
  order: "market_cap_desc",
};

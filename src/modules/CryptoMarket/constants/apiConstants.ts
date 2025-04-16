import { ICryptoParams } from "../types";

export const initialState: ICryptoParams = {
  currency: "usd",
  perPage: 12,
  pageNumber: 1,
  order: "market_cap_desc",
};
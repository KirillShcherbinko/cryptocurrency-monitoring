import { ICryptoParams } from "../types";

export const INITIAL_STATE: { params: ICryptoParams } = {
    params: {
      currency: "usd",
      cryptoPerPage: 12,
      pageNumber: 1,
      order: "market_cap_desc",
    },
  };
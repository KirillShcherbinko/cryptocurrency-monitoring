import { CryptoData, CryptoMarketAction, CryptoMarketState } from "../types";

export const cryptoMarketReducer = (
  state: CryptoMarketState,
  action: CryptoMarketAction
) => {
  switch (action.type) {
    case "set_crypto_data":
      return {
        ...state,
        cryptoData: action.payload,
        cryptoFilteredData: action.payload,
      };

    case "set_filtered_crypto_data":
      const { key, value } = action.payload;
      const filtered = state.cryptoData.filter((item: CryptoData) =>
        String(item[key]).toLowerCase().includes(value.toLowerCase())
      );
      return { ...state, cryptoFilteredData: filtered };

    case "set_crypto_params":
      return {
        ...state,
        cryptoParams: {
          ...state,
          ...action.payload,
        },
      };
      
    default:
      return state;
  }
};

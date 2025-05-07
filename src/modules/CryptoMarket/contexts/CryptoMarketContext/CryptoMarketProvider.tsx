import { ReactNode, useReducer } from "react";
import CryptoMarketContext from "./CryptoMarketContext";
import { cryptoMarketReducer } from "../../reducers/cryptoMarketReducer";
import { initialState } from "../../constants/apiConstants";

interface CryptoMarketProviderProps {
  children: ReactNode;
}

export default function CryptoMarketProvider({ children }: CryptoMarketProviderProps) {
  const [cryptoMarketState, dispatchCryptoMarket] = useReducer(
    cryptoMarketReducer,
    {
      cryptoData: [],
      filterKey: null,
      cryptoFilteredData: [],
      cryptoParams: initialState,
    }
  );

  return <CryptoMarketContext.Provider value={{ cryptoMarketState, dispatchCryptoMarket }}>
    {children}
  </CryptoMarketContext.Provider>
}

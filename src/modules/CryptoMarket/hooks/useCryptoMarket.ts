import { Dispatch, useContext } from "react";
import CryptoMarketContext from "../contexts/CryptoMarketContext/CryptoMarketContext"
import { CryptoMarketAction, CryptoMarketState } from "../types";

export const useCryptoMarket = () => {
  const context = useContext(CryptoMarketContext);
  if (!context) throw new Error('CryptoMarketContext must be within CryptoMarketProvider');
  return context as {
    cryptoMarketState: CryptoMarketState,
    dispatchCryptoMarket: Dispatch<CryptoMarketAction>
  }
}
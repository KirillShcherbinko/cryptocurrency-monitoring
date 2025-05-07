import { CryptoMarketAction } from './../../types/index';
import { createContext, Dispatch } from "react";
import { CryptoMarketState } from "../../types";

type CryptoMarketContextType = {
  cryptoMarketState: CryptoMarketState,
  dispatchCryptoMarket: Dispatch<CryptoMarketAction>
}

const CryptoMarketContext = createContext<CryptoMarketContextType | null>(null);

export default CryptoMarketContext;
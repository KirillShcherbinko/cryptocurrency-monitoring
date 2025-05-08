import { CryptoMarketActionType } from "./../../types/index";
import { createContext, Dispatch } from "react";
import { CryptoMarketStateType } from "../../types";

type CryptoMarketContextType = {
  cryptoMarketState: CryptoMarketStateType;
  dispatchCryptoMarket: Dispatch<CryptoMarketActionType>;
};

const CryptoMarketContext = createContext<CryptoMarketContextType | null>(null);

export default CryptoMarketContext;

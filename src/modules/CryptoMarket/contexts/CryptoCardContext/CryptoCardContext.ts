import { createContext } from "react";
import { CryptoDataType, CurrencySymbol } from "../../types";

export type CryptoCardContextType = {
  cryptoData: CryptoDataType;
  currencySymbol: CurrencySymbol;
};

const CryptoCardContext = createContext<CryptoCardContextType | null>(null);

export default CryptoCardContext;

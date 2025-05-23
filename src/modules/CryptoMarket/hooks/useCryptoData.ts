import { useContext } from "react";
import CryptoCardContext from "../contexts/CryptoCardContext/CryptoCardContext";
import { CryptoDataType, CurrencySymbol } from "../types";

export const useCryptoData = () => {
  const context = useContext(CryptoCardContext);
  if (!context)
    throw new Error("CryptoCardContext must be within CryptoCardProvider");
  return context as {
    cryptoData: CryptoDataType;
    currencySymbol: CurrencySymbol;
  };
};

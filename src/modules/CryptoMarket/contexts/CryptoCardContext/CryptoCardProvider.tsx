import { ReactNode, useState, useEffect } from "react";
import { CryptoData, CurrencySymbol } from "../../types";
import CryptoCardContext from "./CryptoCardContext";
import { useCryptoMarket } from "../../hooks/useCryptoMarket";

interface CryptoCardProviderProps {
  cryptoData: CryptoData;
  children: ReactNode;
}

export default function CryptoCardProvider({
  cryptoData,
  children,
}: CryptoCardProviderProps) {
  const [currencySymbol, setCurrencySymbol] = useState<CurrencySymbol>("$");
  const { cryptoMarketState } = useCryptoMarket();
  const { currency } = cryptoMarketState.cryptoParams;

  useEffect(() => {
    switch (currency) {
      case "usd":
        setCurrencySymbol("$");
        break;
      case "rub":
        setCurrencySymbol("₽");
        break;
      case "eur":
        setCurrencySymbol("€");
        break;
      default:
        setCurrencySymbol("$");
    }
  }, [currency]);

  return (
    <CryptoCardContext.Provider value={{ cryptoData, currencySymbol }}>
      {children}
    </CryptoCardContext.Provider>
  );
}

import { createContext } from "react"
import { CryptoData, CurrencySymbol } from "../../types"

export type CryptoCardContextType = {
  cryptoData: CryptoData,
  currencySymbol: CurrencySymbol,
}

const CryptoCardContext = createContext<CryptoCardContextType | null>(null);

export default CryptoCardContext;
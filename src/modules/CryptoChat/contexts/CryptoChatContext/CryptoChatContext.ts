import { CryptoChatActionType, CryptoChatStateType } from './../../types/index';
import { createContext, Dispatch } from "react";

type CryptoChatContextType = {
  cryptoChatState: CryptoChatStateType,
  dispatchCryptoChat: Dispatch<CryptoChatActionType>
}

const CryptoChatContext = createContext<CryptoChatContextType | null>(null);

export default CryptoChatContext;
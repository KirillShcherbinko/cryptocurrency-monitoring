import { Dispatch, useContext } from "react"
import CryptoChatContext from "../contexts/CryptoChatContext/CryptoChatContext";
import { CryptoChatActionType, CryptoChatStateType } from "../types";

export const useCryptoChat = () => {
  const context = useContext(CryptoChatContext);
  if (!context) throw new Error('CryptoChatContext must be within CryptoChatProvider');
  return context as {
    cryptoChatState: CryptoChatStateType,
    dispatchCryptoChat: Dispatch<CryptoChatActionType>,
  }
}
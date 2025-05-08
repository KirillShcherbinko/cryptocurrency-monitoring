import { createContext } from "react";
import { MessageType } from "../../types"

export type CryptoMessageContextType<T> = {
  message: T | null;
}

const CryptoMessageContext = createContext<CryptoMessageContextType<MessageType> | null>(null);

export default CryptoMessageContext;
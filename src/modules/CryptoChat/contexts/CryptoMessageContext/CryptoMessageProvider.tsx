import { ReactNode } from "react";
import { MessageType } from "../../types";
import CryptoMessageContext from "./CryptoMessageContext";

interface CryptoMessageProviderProps<T> {
  message: T;
  children: ReactNode;
}

export default function CryptoMessageProvider<T extends MessageType>({
  message,
  children,
}: CryptoMessageProviderProps<T>) {
  if(!message) return null;

  return (
    <CryptoMessageContext.Provider value={{ message }}>
      {children}
    </CryptoMessageContext.Provider>
  );
}

import { useContext } from "react";
import CryptoMessageContext, {
  CryptoMessageContextType,
} from "../contexts/CryptoMessageContext/CryptoMessageContext";
import { MessageType } from "../types";

export const useCryptoMessage = <T extends MessageType>() => {
  const context = useContext<CryptoMessageContextType<MessageType> | null>(
    CryptoMessageContext
  );
  if (!context)
    throw new Error(
      "CryptoMessageContext must be within CryptoMessageProvider"
    );
  return context as { message: T };
};

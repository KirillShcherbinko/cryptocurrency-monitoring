import Style from "./CryptoSystemMessage.module.css";
import { SystemMessageType } from "../../../types";

interface CryptoSystemMessageProps {
  message: SystemMessageType;
}

export default function CryptoSystemMessage({
  message,
}: CryptoSystemMessageProps) {
  return <div className={Style.CryptoSystemMessage}>{message.text}</div>;
}

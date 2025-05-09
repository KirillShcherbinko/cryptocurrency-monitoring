import Style from "./CryptoSystemMessage.module.css";
import { SystemMessageType } from "../../types";
import { useCryptoMessage } from "../../hooks/useCryptoMessage";

export default function CryptoSystemMessage() {
  const { message } = useCryptoMessage<SystemMessageType>();

  return <div className={Style.CryptoSystemMessage}>{message.data.text}</div>;
}

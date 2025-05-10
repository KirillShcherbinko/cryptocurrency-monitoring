import Style from "./CryptoSystemMessage.module.css";
import { SystemMessageType } from "../../types";
import { useCryptoMessage } from "../../hooks/useCryptoMessage";
import Paragraph from "../../../../UI/Paragraph/Paragraph";

export default function CryptoSystemMessage() {
  const { message } = useCryptoMessage<SystemMessageType>();

  return <Paragraph className={Style.CryptoSystemMessage}>{message.data.text}</Paragraph>;
}

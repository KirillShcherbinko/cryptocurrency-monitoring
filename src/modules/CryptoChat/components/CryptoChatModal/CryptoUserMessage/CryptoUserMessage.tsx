import Style from "./CryptoUserMessage.module.css";
import Card from "../../../../../components/Card/Card";
import { useData } from "../../../../../hooks/useData";
import { ChatDataType, UserMessageType } from "../../../types";
import classNames from "classnames";
import Paragraph from "../../../../../UI/Paragraph/Paragraph";
import Title from "../../../../../UI/Title/Title";

interface CryptoUserMessageProps {
  message: UserMessageType;
}

export default function CryptoUserMessage({ message }: CryptoUserMessageProps) {
  const userData = useData<ChatDataType>();

  if (!userData) return null;

  const { id, username, text, timestamp } = message;
  const { userId } = userData;

  return (
    <Card
      className={classNames(
        Style.CryptoUserMessage,
        userId === id ? Style.MyCryptoUserMessage : null
      )}
    >
      <Title className={Style.CryptoMessageName}>{username}</Title>
      <div className={Style.CryptoMessageBody}>
        <Paragraph className={Style.CryptoMessageParagraph}>{text}</Paragraph>
        <p className={Style.CryptoMessageTimestamp}>{timestamp}</p>
      </div>
    </Card>
  );
}

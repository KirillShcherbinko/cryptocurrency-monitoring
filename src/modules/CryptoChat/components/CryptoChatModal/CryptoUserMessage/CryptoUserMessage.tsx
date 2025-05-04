import Style from "./CryptoUserMessage.module.css";
import Card from "../../../../../components/Card/Card";
import { useData } from "../../../../../hooks/useData";
import { ChatDataType, UserMessageType } from "../../../types";
import classNames from "classnames";
import Paragraph from "../../../../../UI/Paragraph/Paragraph";
import { useRef } from "react";

interface CryptoMessageProps {
  message: UserMessageType;
}

export default function CryptoMessage({ message }: CryptoMessageProps) {
  const userData = useData<ChatDataType>();

  if (!userData) return null;

  const cardRef = useRef<HTMLDivElement>(null!);
  const textRef = useRef<HTMLParagraphElement>(null!);
  const timestampRef = useRef<HTMLParagraphElement>(null!);

  const { id, username, text, timestamp } = message;
  const { userId } = userData;

  return (
    <Card
      ref={cardRef}
      className={classNames(
        Style.CryptoUserMessage,
        userId === id ? Style.MyCryptoUserMessage : null
      )}
    >
      <div className={Style.CryptoMessageName}>{username}</div>
      <div className={Style.CryptoMessageBody}>
        <Paragraph ref={textRef} className={Style.CryptoMessageParagraph}>{text}</Paragraph>
        <p
          ref={timestampRef}
          className={Style.CryptoMessageTimestamp}
        >
          {timestamp}
        </p>
      </div>
    </Card>
  );
}

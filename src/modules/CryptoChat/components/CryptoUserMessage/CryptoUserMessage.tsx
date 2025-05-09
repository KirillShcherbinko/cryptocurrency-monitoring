import Style from "./CryptoUserMessage.module.css";
import Card from "../../../../components/Card/Card";
import classNames from "classnames";
import Paragraph from "../../../../UI/Paragraph/Paragraph";
import Title from "../../../../UI/Title/Title";
import { useCryptoChat } from "../../hooks/useCryptoChat";
import { useCryptoMessage } from "../../hooks/useCryptoMessage";
import { UserMessageType } from "../../types";

export default function CryptoUserMessage() {
  const {cryptoChatState} = useCryptoChat();
  const {message} = useCryptoMessage<UserMessageType>();

  const { id, username, text, timestamp } = message.data;
  const { userId } = cryptoChatState;

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

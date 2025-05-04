import Style from "./CryptoChatBody.module.css";
import { ChatDataType } from "../../../types";
import List from "../../../../../components/List/List";
import { useData } from "../../../../../hooks/useData";
import CryptoUserMessage from "../CryptoUserMessage/CryptoUserMessage";

export default function CryptoChatBody() {
  const data = useData<ChatDataType>();

  if (!data) return null;

  const { messages } = data;

  return (
    <List
      items={messages}
      className={Style.CryptoChatBody}
      render={(message) =>
        message.type === "user" ? (
          <CryptoUserMessage message={message.data} />
        ) : message.type === "system" ? (
          <div className={Style.SystemMessage}>{message.data.text}</div>
        ) : null
      }
    />
  );
}

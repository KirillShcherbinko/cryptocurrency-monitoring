import Style from "./CryptoChatBody.module.css";
import List from "../../../../../components/List/List";
import CryptoUserMessage from "../CryptoUserMessage/CryptoUserMessage";
import CryptoSystemMessage from "../CryptoSystemMessage/CryptoSystemMessage";
import { useCryptoChat } from "../../../hooks/useCryptoChat";
import CryptoMessageProvider from "../../../contexts/CryptoMessageContext/CryptoMessageProvider";

export default function CryptoChatBody() {
  const { cryptoChatState } = useCryptoChat();
  const {messages} = cryptoChatState;

  return (
    <List
      items={messages}
      className={Style.CryptoChatBody}
      render={(message) =>
          message.type === "user" ? (
            <CryptoMessageProvider message={message}>
              <CryptoUserMessage />
            </CryptoMessageProvider>
          ) : message.type === "system" ? (
            <CryptoMessageProvider message={message}>
              <CryptoSystemMessage />
            </CryptoMessageProvider>
          ) : null
      }
    />
  );
}

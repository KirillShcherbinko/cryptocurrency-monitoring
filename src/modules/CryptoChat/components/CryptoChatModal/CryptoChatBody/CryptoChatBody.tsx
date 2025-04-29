import Style from "./CryptoChatBody.module.css";
import Message from "./Message/Message";
import { MessageType } from "../../../types";
import SystemMessage from "./SystemMessage/SystemMessage";

interface CryptoChatBodyProps {
  messages: MessageType[];
}

export default function CryptoChatBody({ messages }: CryptoChatBodyProps) {
  return (
    <div className={Style.CryptoChatBody}>
      {messages.map((message, index) => {
        if (message.type === 'user') {
          return (
            <Message 
              key={index} 
              username={message.data.username} 
              text={message.data.text} 
            />
          );
        } else if (message.type === 'system') {
          return (
            <SystemMessage 
              key={index} 
              text={message.data.text}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

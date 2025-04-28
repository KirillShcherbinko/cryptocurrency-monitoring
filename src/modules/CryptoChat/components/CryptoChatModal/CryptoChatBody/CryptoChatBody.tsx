import Style from "./CryptoChatBody.module.css";
import Message from "./Message/Message";
import { MessageType } from "../../../types";

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
            <div 
              key={index} 
              className={Style.systemMessage}
            >
              {message.data.text}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

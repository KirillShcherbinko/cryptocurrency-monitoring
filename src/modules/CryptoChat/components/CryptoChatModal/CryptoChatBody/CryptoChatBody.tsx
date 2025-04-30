import Style from "./CryptoChatBody.module.css";
import { MessageType } from "../../../types";
import classNames from "classnames";
import Paragraph from "../../../../../UI/Paragraph/Paragraph";
import ScrollToBottom from "react-scroll-to-bottom";

interface CryptoChatBodyProps {
  id: string;
  messages: MessageType[];
}

export default function CryptoChatBody({
  id,
  messages,
}: CryptoChatBodyProps) {
  return (
    <ScrollToBottom className={Style.ScrollContainer}>
      <div className={Style.CryptoChatBody}>
        {messages.map((message, index) => {
          if (message.type === "user") {
            return (
              <Paragraph
                key={index}
                className={
                  classNames(
                    Style.Message,
                    message.data.id === id
                      ? Style.MyMessage
                      : null,
                    Style.Text,
                  )
                }
              >
                {message.data.text}
              </Paragraph>
            );
          } else if (message.type === "system") {
            return (
              <div key={index} className={Style.SystemMessage}>
                {message.data.text}
              </div>
            );
          }
          return null;
        })}
      </div>
    </ScrollToBottom>
  );
}

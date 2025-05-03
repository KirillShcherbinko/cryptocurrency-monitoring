import Style from "./CryptoChatBody.module.css";
import { MessageType } from "../../../types";
import classNames from "classnames";
import Paragraph from "../../../../../UI/Paragraph/Paragraph";
import ScrollWrapper from "../../../../../components/ScrollWrapper/ScrollWrapper";
import { useEffect, useState } from "react";

interface CryptoChatBodyProps {
  id: string;
  messages: MessageType[];
}

export default function CryptoChatBody({ id, messages }: CryptoChatBodyProps) {
  const [lastId, setLastId] = useState<string>(id);

  useEffect(() => {
    if (messages.length) setLastId(messages[messages.length - 1].data.id);
  }, [messages]);

  return (
    <ScrollWrapper id={id} lastId={lastId}>
      <div className={Style.CryptoChatBody}>
        {messages.map((message, index) => {
          if (message.type === "user") {
            return (
              <Paragraph
                key={index}
                className={classNames(
                  Style.Message,
                  message.data.id === id ? Style.MyMessage : null,
                  Style.Text
                )}
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
    </ScrollWrapper>
  );
}

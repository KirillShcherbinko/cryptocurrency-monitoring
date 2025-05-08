import Style from "./CryptoChatFooter.module.css";
import { useCallback, useState } from "react";
import Button from "../../../../../UI/Button/Button";
import Icon from "../../../../../UI/Icon/Icon";
import SendIcon from "../../../../../assets/icon-send.png";
import DataProvider from "../../../../../contexts/data/DataProvider";
import { UserMessageType } from "../../../types";
import {
  initialCurrentMessage,
  MAX_MESSAGE_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_MESSAGE_LENGTH,
  MIN_USERNAME_LENGTH,
} from "../../../constants";
import CryptoChatInput from "./CryptoChatInput/CryptoChatInput";
import Socket = SocketIOClient.Socket;

interface CryptoChatFooterProps {
  socket: Socket | null;
}

export default function CryptoChatFooter({ socket }: CryptoChatFooterProps) {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [messageData, setMessageData] = useState<UserMessageType>(
    initialCurrentMessage
  );

  const sendMessage = useCallback(async () => {
    if (!socket) return;

    const { type, data } = messageData;
    const { text } = data;

    if (
      type === "join" &&
      text.length >= MIN_USERNAME_LENGTH &&
      text.length <= MAX_USERNAME_LENGTH
    ) {
      socket.emit("join chat", data);

      setMessageData({
        type: "user",
        data: {
          ...data,
          username: text,
        },
      });
    } else if (
      type === "user" &&
      text.length >= MIN_MESSAGE_LENGTH &&
      text.length <= MAX_MESSAGE_LENGTH
    ) {
      socket.emit("send message", data);
    }

    setMessageData((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        text: "",
      },
    }));

    setIsEmpty(true);
  }, [socket, messageData]);

  return (
    <div className={Style.CryptoChatFooter}>
      <DataProvider data={messageData}>
        <CryptoChatInput
          isEmpty={isEmpty}
          onEmpty={setIsEmpty}
          onChat={setMessageData}
          onMessage={sendMessage}
        />
        <Button className={Style.CryptoChatButton} onClick={sendMessage}>
          <Icon iconSrc={SendIcon} iconAlt="Send icon" />
        </Button>
      </DataProvider>
    </div>
  );
}

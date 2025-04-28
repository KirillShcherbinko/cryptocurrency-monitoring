import { useCallback, useState } from "react";
import Button from "../../../../../UI/Button/Button";
import Icon from "../../../../../UI/Icon/Icon";
import SendIcon from "../../../../../assets/icon-send.png";
import InputProvider from "../../../../../contexts/input/InputProvider";
import DataProvider from "../../../../../contexts/data/DataProvider";
import { JoinMessage, UserMessage } from "../../../types";
import {
  initialChatState,
  MAX_MESSAGE_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_MESSAGE_LENGTH,
  MIN_USERNAME_LENGTH,
} from "../../../constants/paramsConstants";
import CryptoChatInput from "./CryptoChatInput/CryptoChatInput";
import Socket = SocketIOClient.Socket;


interface CryptoChatFooterProps {
  socket: Socket | null,
}

export default function CryptoChatFooter({socket}: CryptoChatFooterProps) {

  const [messageData, setMessageData] = useState<UserMessage | JoinMessage>(initialChatState);

  const sendMessage = useCallback(async() => {
    if (!socket) return;

    const type = messageData.type;
    const { text } = messageData.data;

    if (
      type === 'join' &&
      text.length >= MIN_USERNAME_LENGTH &&
      text.length <= MAX_USERNAME_LENGTH
    ) {
      socket.emit('join chat', messageData.data);
      setMessageData({
        type: 'user',
        data: {
          ...messageData.data,
          username: text,
        }
      });
    } else if (
      type === 'user' &&
      text.length >= MIN_MESSAGE_LENGTH &&
      text.length <= MAX_MESSAGE_LENGTH
    ) {
      socket.emit('send message', messageData.data);
    }

    setMessageData(prev => ({
      ...prev, 
      data: { 
        ...prev.data, 
        text: '',
      }
    }));
  }, [socket, messageData]);

  return (
    <div>
      <DataProvider data={messageData}>
        <InputProvider>
          <CryptoChatInput onChat={setMessageData} />
        </InputProvider>
        <Button onClick={() => sendMessage()}>
          <Icon iconSrc={SendIcon} iconAlt="Send icon" />
        </Button>
      </DataProvider>
    </div>
  );
}

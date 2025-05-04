import Style from "./CryptoChatModal.module.css";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { MessageType } from "../../types";
import CryptoChatBody from "./CryptoChatBody/CryptoChatBody";
import CryptoChatFooter from "./CryptoChatFooter/CryptoChatFooter";
import Socket = SocketIOClient.Socket;
import ScrollWrapper from "../../../../components/ScrollWrapper/ScrollWrapper";
import DataProvider from "../../../../contexts/data/DataProvider";
import CryptoChatHeader from "./CryptoChatHeader/CryptoChatHeader";

export default function CryptoChatModal() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  const lastId = messages[messages.length - 1]?.data.id;

  useEffect(() => {
    const newSocket = io("http://localhost:5000", {
      transports: ["websocket", "polling"],
    });

    newSocket.on("connect", () => {
      setSocket(newSocket);
      setUserId(newSocket.id);
    });

    newSocket.on("receive message", (message: MessageType) => {
      setMessages((prev) => [...prev, message]);
    });

    newSocket.on("error", (error: string) => {
      setErrorMessage(error);
      console.log(errorMessage);
    });

    newSocket.on("disconnect", () => setSocket(null));

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div className={Style.CryptoChatModal}>
      <CryptoChatHeader />
      <ScrollWrapper data={messages} isScroll={lastId === userId}>
        <DataProvider data={{ messages, userId }}>
          <CryptoChatBody />
        </DataProvider>
      </ScrollWrapper>
      <CryptoChatFooter socket={socket} />
    </div>
  );
}

import Style from "./CryptoChatModal.module.css";
import { useLayoutEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { MessageType } from "../../types";
import CryptoChatBody from "../CryptoChatBody/CryptoChatBody";
import CryptoChatFooter from "../CryptoChatFooter/CryptoChatFooter";
import ScrollWrapper from "../../../../components/ScrollWrapper/ScrollWrapper";
import CryptoChatHeader from "../CryptoChatHeader/CryptoChatHeader";
import CryptoChatProvider from "../../contexts/CryptoChatContext/CryptoChatProvider";
import { useCryptoChat } from "../../hooks/useCryptoChat";
import CryptoChatError from "../CryptoChatError/CryptoChatError";
import CryptoChatMisconnectionScreen from "../CryptoChatMisconnectionScreen/CryptoChatMisconnectionScreen";
import Spinner from "../../../../UI/Spinner/Spinner";
import CryptoChatEmptyScreen from "../CryptoChatEmptyScreen/CryptoChatEmptyScreen";

function CryptoChatModalInner() {
  const { cryptoChatState, dispatchCryptoChat } = useCryptoChat();
  const { userId, messages } = cryptoChatState;

  const [isConnecting, setIsConnecting] = useState(true);
  const [hasFailed, setHasFailed] = useState(false);

  const socketRef = useRef<ReturnType<typeof io> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lastId = messages[messages.length - 1]?.data.id;

  const setupSocket = () => {
    const socket = io("https://simple-chat-api-qt15.onrender.com/", {
      transports: ["websocket", "polling"],
    });

    socketRef.current = socket;

    timeoutRef.current = setTimeout(() => {
      if (!socket.connected) {
        setIsConnecting(false);
        setHasFailed(true);
        socket.disconnect();
      }
    }, 3000);

    socket.on("connect", () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsConnecting(false);
      setHasFailed(false);
      dispatchCryptoChat({ type: "set_socket", payload: socket });
    });

    socket.on("disconnect", () => {
      dispatchCryptoChat({ type: "set_socket", payload: null });
      setIsConnecting(true);
      
      timeoutRef.current = setTimeout(() => {
        setIsConnecting(false);
        setHasFailed(true);
      }, 5000);
    });

    socket.on("receive message", (message: MessageType) => {
      dispatchCryptoChat({ type: "add_message", payload: message });
    });

    socket.on("error", (error: string) => {
      console.error("Socket error:", error);
    });
  };

  useLayoutEffect(() => {
    setupSocket();

    return () => {
      socketRef.current?.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={Style.CryptoChatModal}>
      <CryptoChatError />
      <CryptoChatHeader />
      {isConnecting ? (
        <Spinner />
      ) : hasFailed ? (
        <CryptoChatMisconnectionScreen />
      ) : messages.length ? (
        <ScrollWrapper data={messages} isScroll={lastId === userId}>
          <CryptoChatBody />
        </ScrollWrapper>
      ) : <CryptoChatEmptyScreen />}
      <CryptoChatFooter />
    </div>
  );
}

export default function CryptoChatModal() {
  return (
    <CryptoChatProvider>
      <CryptoChatModalInner />
    </CryptoChatProvider>
  );
}

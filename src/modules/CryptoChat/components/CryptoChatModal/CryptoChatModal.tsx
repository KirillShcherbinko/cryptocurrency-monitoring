import Style from "./CryptoChatModal.module.css";
import { useEffect } from "react";
import io from "socket.io-client";
import { MessageType } from "../../types";
import CryptoChatBody from "./CryptoChatBody/CryptoChatBody";
import CryptoChatFooter from "./CryptoChatFooter/CryptoChatFooter";
import ScrollWrapper from "../../../../components/ScrollWrapper/ScrollWrapper";
import CryptoChatHeader from "./CryptoChatHeader/CryptoChatHeader";
import CryptoChatProvider from "../../contexts/CryptoChatContext/CryptoChatProvider";
import { useCryptoChat } from "../../hooks/useCryptoChat";

function CryptoChatModalInner() {
  const { cryptoChatState, dispatchCryptoChat } = useCryptoChat();
  const { userId, messages } = cryptoChatState;

  const lastId = messages[messages.length - 1]?.data.id;

  useEffect(() => {
    const newSocket = io("http://localhost:5000", {
      transports: ["websocket", "polling"],
    });

    newSocket.on("connect", () => {
      dispatchCryptoChat({ type: "set_socket", payload: newSocket });
    });

    newSocket.on("receive message", (message: MessageType) => {
      dispatchCryptoChat({ type: "add_message", payload: message });
    });

    newSocket.on("error", (error: string) => {
      console.log(error);
    });

    newSocket.on("disconnect", () => {
      dispatchCryptoChat({ type: "set_socket", payload: null });
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div className={Style.CryptoChatModal}>
      <CryptoChatHeader />
      <ScrollWrapper data={messages} isScroll={lastId === userId}>
        <CryptoChatBody />
      </ScrollWrapper>
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
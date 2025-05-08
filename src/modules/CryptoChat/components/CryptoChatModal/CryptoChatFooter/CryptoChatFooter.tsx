import Style from "./CryptoChatFooter.module.css";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import Button from "../../../../../UI/Button/Button";
import Icon from "../../../../../UI/Icon/Icon";
import SendIcon from "../../../../../assets/icon-send.png";
import { MAX_MESSAGE_LENGTH, MIN_MESSAGE_LENGTH } from "../../../constants";
import { useCryptoChat } from "../../../hooks/useCryptoChat";
import Textarea from "../../../../../UI/Textarea/Textarea";

export default function CryptoChatFooter() {
  const [input, setInput] = useState<string>("");

  const { cryptoChatState, dispatchCryptoChat } = useCryptoChat();
  const { socket, currentMessage } = cryptoChatState;

  const placeholder = currentMessage.type === "join" ? "Your name" : "Message";

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(evt.target.value);
  const handleKeyDown = (evt: KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === "Enter" && !evt.shiftKey) {
      evt.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (!socket) return;

    const newMessage = {
      ...currentMessage,
      data: {
        ...currentMessage.data,
        text: input.trim(),
      },
    };

    dispatchCryptoChat({ type: "set_current_message", payload: newMessage });

    if (newMessage.type === "join") {
      socket.emit("join chat", newMessage.data);
    } else {
      socket.emit("send message", newMessage.data);
    }

    setInput("");
  };

  return (
    <div className={Style.CryptoChatFooter}>
      <div className={Style.CryptoChatInput}>
        <Textarea
          name="Chat"
          placeholder={placeholder}
          minLength={MIN_MESSAGE_LENGTH}
          maxLength={MAX_MESSAGE_LENGTH}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Button className={Style.CryptoChatButton} onClick={sendMessage}>
        <Icon iconSrc={SendIcon} iconAlt="Send icon" />
      </Button>
    </div>
  );
}

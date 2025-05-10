import Style from "./CryptoChatFooter.module.css";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import Button from "../../../../UI/Button/Button";
import SendIcon from "../../../../assets/icon-send.png";
import { useCryptoChat } from "../../hooks/useCryptoChat";
import Textarea from "../../../../UI/Textarea/Textarea";

export default function CryptoChatFooter() {
  const [input, setInput] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  const { cryptoChatState, dispatchCryptoChat } = useCryptoChat();
  const { socket, currentMessage } = cryptoChatState;

  const placeholder = currentMessage.type === "join" ? "Your name" : "Message";

  useEffect(() => {
    if (!currentMessage.data.text) setInput("");
  }, [currentMessage]);

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    if (!socket) return;
    const currentInput = evt.target.value;
    setInput(currentInput);
    setDisabled(!currentInput.trim());
  };

  const handleKeyDown = (evt: KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === "Enter" && !evt.shiftKey) {
      evt.preventDefault();
      if (!disabled) sendMessage();
    }
  };

  const sendMessage = () => {
    if (!socket) return;
    setDisabled(true);

    const newMessage = {
      ...currentMessage,
      data: { ...currentMessage.data, text: input.trim() },
    };

    dispatchCryptoChat({ type: "set_current_message", payload: newMessage });

    const event = newMessage.type === "join" ? "join chat" : "send message";
    socket.emit(event, newMessage.data);
  };

  return (
    <div className={Style.CryptoChatFooter}>
      <div className={Style.Input}>
        <Textarea
          name="Chat"
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Button
        className={Style.Button}
        onClick={sendMessage}
        disabled={disabled || !socket?.connected}
      >
        <img className={Style.Icon} src={SendIcon} alt="Send icon" />
      </Button>
    </div>
  );
}

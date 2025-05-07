import Style from "./CryptoChatInput.module.css";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { JoinMessage, UserMessage } from "../../../../types";
import { useData } from "../../../../../../hooks/useData";
import {
  MAX_MESSAGE_LENGTH,
  MIN_MESSAGE_LENGTH,
} from "../../../../constants/paramsConstants";
import Textarea from "../../../../../../UI/Textarea/Textarea";

interface CryptoChatInputProps {
  isEmpty: boolean;
  onEmpty: (value: boolean) => void;
  onChat: (message: UserMessage | JoinMessage) => void;
  onMessage: () => void;
}

export default function CryptoChatInput({
  isEmpty,
  onEmpty,
  onChat,
  onMessage,
}: CryptoChatInputProps) {
  const data = useData<UserMessage | JoinMessage>();
  if (!data) return null;

  const [input, setInput] = useState<string>("");

  const placeholder = data.type === "join" ? "Your name" : "Message";

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(evt.target.value);

  const handleKeyDown = (evt: KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === "Enter" && !evt.shiftKey) {
      evt.preventDefault();
      onMessage();
    }
  };

  useEffect(() => {
    const newData = {
      type: data.type,
      data: {
        ...data?.data,
        text: input,
      },
    };
    onChat(newData);
    if (isEmpty) {
      setInput("");
      onEmpty(false);
    }
  }, [isEmpty, input, onChat]);

  return (
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
  );
}

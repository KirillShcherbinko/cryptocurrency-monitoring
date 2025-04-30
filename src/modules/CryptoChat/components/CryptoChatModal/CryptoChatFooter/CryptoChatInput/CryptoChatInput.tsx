import Style from "./CryptoChatInput.module.css";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { JoinMessage, UserMessage } from "../../../../types";
import { useData } from "../../../../../../hooks/useData";
import { MAX_MESSAGE_LENGTH, MIN_MESSAGE_LENGTH } from "../../../../constants/paramsConstants";
import Textarea from "../../../../../../UI/Textarea/Textarea";

interface CryptoChatInputProps {
  isEmpty: boolean;
  onEmpty: (value: boolean) => void;
  onChat: (message: UserMessage | JoinMessage) => void;
  onKeyDown: (evt: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export default function CryptoChatInput({ isEmpty, onEmpty, onChat, onKeyDown }: CryptoChatInputProps) {
  const data = useData<UserMessage | JoinMessage>();
  const [input, setInput] = useState<string>('');

  const placeholder = data?.type === 'join'
    ? 'Enter your name'
    : 'Message';

  useEffect(() => {
    if (data) {
      const newData = {
        type: data.type,
        data: {
          ...data?.data,
          text: input,
        }}
      onChat(newData);
      if (isEmpty) {
        setInput('');
        onEmpty(false);
      };
    }
  }, [isEmpty, input, onChat]);

  return(
    <Textarea
      className={Style.CryptoChatInput}
      name="Chat"
      placeholder={placeholder}
      minLength={MIN_MESSAGE_LENGTH}
      maxLength={MAX_MESSAGE_LENGTH}
      value={input}
      onChange={(evt: ChangeEvent<HTMLTextAreaElement>) =>
        setInput(evt.target.value)
      }
      onKeyDown={onKeyDown}
    />
  );
}
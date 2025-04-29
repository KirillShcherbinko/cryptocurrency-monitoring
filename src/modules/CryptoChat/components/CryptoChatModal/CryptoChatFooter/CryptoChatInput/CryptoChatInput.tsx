import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../../../../../UI/Input/Input";
import { JoinMessage, UserMessage } from "../../../../types";
import { useData } from "../../../../../../hooks/useData";
import { MAX_MESSAGE_LENGTH, MIN_MESSAGE_LENGTH } from "../../../../constants/paramsConstants";

interface CryptoChatInputProps {
  isEmpty: boolean;
  onEmpty: (value: boolean) => void;
  onChat: (message: UserMessage | JoinMessage) => void;
}

export default function CryptoChatInput({ isEmpty, onEmpty, onChat }: CryptoChatInputProps) {
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
    <Input
      value={input}
      onChange={(evt: ChangeEvent<HTMLInputElement>) =>
        setInput(evt.target.value)
      }
      placeholder={placeholder}
      minLength={MIN_MESSAGE_LENGTH}
      maxLength={MAX_MESSAGE_LENGTH}
    />
  );
}
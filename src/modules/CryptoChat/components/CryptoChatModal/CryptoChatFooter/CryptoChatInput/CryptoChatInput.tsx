import { useEffect } from "react";
import Input from "../../../../../../UI/Input/Input";
import { useInput } from "../../../../../../hooks/useInput";
import { JoinMessage, UserMessage } from "../../../../types";
import { useData } from "../../../../../../hooks/useData";
import { MAX_MESSAGE_LENGTH, MIN_MESSAGE_LENGTH } from "../../../../constants/paramsConstants";

interface CryptoChatInputProps {
  onChat: (message: UserMessage | JoinMessage) => void;
}

export default function CryptoChatInput({ onChat }: CryptoChatInputProps) {
  const data = useData<UserMessage | JoinMessage>();
  const { input } = useInput();

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
    }
  }, [input, onChat]);

  return(
    <Input
      placeholder={placeholder}
      minLength={MIN_MESSAGE_LENGTH}
      maxLength={MAX_MESSAGE_LENGTH}
    />
  );
}
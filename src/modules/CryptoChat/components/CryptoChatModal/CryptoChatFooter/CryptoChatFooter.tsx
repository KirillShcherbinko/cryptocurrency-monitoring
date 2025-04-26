import { useState } from "react";
import Button from "../../../../../UI/Button/Button";
import Icon from "../../../../../UI/Icon/Icon";
import Input from "../../../../../UI/Input/Input";
import SendIcon from "../../../../../assets/icon-send.png";
//import io from "socket.io-client";
import InputProvider from "../../../../../contexts/input/InputProvider";
import { useInput } from "../../../../../hooks/useInput";

export default function CryptoChatFooter() {
  const [placeholder, setPlaceholder] = useState<string>("Enter your name");
  const [username, setUsername] = useState<string>('');

  const {input} = useInput();

  //const socket = io('https://simple-chat-api-six.vercel.app/');
  const joinChat = () => {
    if (input.length >= 3 && input.length <= 15) {
      setUsername(input);
      setPlaceholder('Message');
      console.log(username);
    }
  }

  return (
    <form>
      <InputProvider>
        <Input
          placeholder={placeholder}
          minLength={3}
          maxLength={15}
        />
      </InputProvider>
      <Button onClick={() => joinChat()}>
        <Icon iconSrc={SendIcon} iconAlt="Send icon" />
      </Button>
    </form>
  );
}
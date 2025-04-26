import { ReactNode } from "react";
import Style from "./CryptoChatBody.module.css";
import Message from "./Message/Message";

interface CryptoChatBodyProps {
  children: ReactNode;
}

export default function CryptoChatBody({ children }: CryptoChatBodyProps) {
  return (
    <div className={Style.CryptoChatBody}>
      <Message username="not me" text="chat" />
      <Message username="me" text="my chat" />
      {children}
    </div>
  );
}
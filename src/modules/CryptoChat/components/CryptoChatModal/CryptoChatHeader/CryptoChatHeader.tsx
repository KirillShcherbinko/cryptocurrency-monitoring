import Style from "./CryptoChat.module.css";
import Title from "../../../../../UI/Title/Title";

export default function CryptoChatHeader() {
  return (
    <div >
      <Title className={Style.CryptoChatHeader}>Crypto Chat</Title>
    </div>
  );
}
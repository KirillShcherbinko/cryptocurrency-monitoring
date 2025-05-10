import Style from "./CryptoChat.module.css";
import Title from "../../../../UI/Title/Title";

export default function CryptoChatHeader() {
  return (
    <div className={Style.CryptoChatHeader}>
      <Title className={Style.Title}>Crypto Chat</Title>
    </div>
  );
}

import Style from "./CryptoChat.module.css";
import Title from "../../../../UI/Title/Title";

export default function CryptoChatHeader() {
  return (
    <div className={Style.CryptoChatHeader}>
      <Title type="huge">Crypto Chat</Title>
    </div>
  );
}

import Style from "./CryptoChat.module.css";
import ModalProvider from "../../../../UI/Modal/ModalContext/ModalProvider";
import CryptoChatButton from "../CryptoChatButton/CryptoChatButton";

export default function CryptoChat() {
  return (
    <div className={Style.CryptoChat}>
      <ModalProvider>
        <CryptoChatButton />
      </ModalProvider>
    </div>
  );
}

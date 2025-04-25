import Style from "./CryptoChat.module.css";
import ModalProvider from "../../../../contexts/modal/ModalProvider";
import CryptoChatButton from "../CryptoChatButton/CryptoChatButton";
import CryptoChatModal from "../CryptoChatModal/CryptoChatModal";

export default function CryptoChat() {
  return (
    <div className={Style.CryptoChat}>
      <ModalProvider content={<CryptoChatModal />}>
        <CryptoChatButton/>
      </ModalProvider>
    </div>
  );
}
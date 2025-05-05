import Style from "./CryptoChatButton.module.css";
import { useModal } from "../../../../hooks/useModal";
import ChatIcon from "../../../../assets/icon-chat.png";

export default function CryptoChatButton() {
  const { openModal } = useModal();

  return (
    <button className={Style.CryptoChatButton} onClick={openModal}>
      <img className={Style.CryptoChatIcon} src={ChatIcon} alt="Chat icon" />
    </button>
  );
}

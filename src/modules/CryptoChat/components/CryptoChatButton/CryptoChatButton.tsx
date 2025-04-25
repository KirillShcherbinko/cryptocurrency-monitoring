import Style from "./CryptoChatButton.module.css";
import { useModal } from "../../../../hooks/useModal";
import ChatIcon from "../../../../assets/icon-chat.png";
import Icon from "../../../../UI/Icon/Icon";

export default function CryptoChatButton() {
  const { openModal } = useModal();

  return (
    <button className={Style.CryptoChatButton} onClick={openModal}>
      <Icon iconSrc={ChatIcon} iconAlt="Chat icon" />
    </button>
  );
}

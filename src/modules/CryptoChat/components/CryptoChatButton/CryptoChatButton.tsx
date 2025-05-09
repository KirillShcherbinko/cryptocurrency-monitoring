import Style from "./CryptoChatButton.module.css";
import { useModal } from "../../../../hooks/useModal";
import ChatIcon from "../../../../assets/icon-chat.png";
import { useMemo } from "react";
import CryptoChatModal from "../CryptoChatModal/CryptoChatModal";

export default function CryptoChatButton() {
  const { openModal } = useModal();
  const modal = useMemo(() => <CryptoChatModal />, []);

  return (
    <button className={Style.CryptoChatButton} onClick={() => openModal(modal)}>
      <img className={Style.CryptoChatIcon} src={ChatIcon} alt="Chat icon" />
    </button>
  );
}

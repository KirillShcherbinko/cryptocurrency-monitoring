import { ReactNode, useState } from "react"
import ModalContext from "./ModalContext";
import Modal from "../../UI/Modal/Modal";

interface ModalProviderProps {
  content: ReactNode;
  children: ReactNode;
}

export default function ModalProvider( { content, children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('.no-scroll');
  }
  const closeModal = () => {
    setIsOpen(false);
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('.no-scroll');
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, content }}>
      { children }
      <Modal>{content}</Modal>
    </ModalContext.Provider>
  )
}
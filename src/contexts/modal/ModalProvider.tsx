import { ReactNode, useState } from "react"
import ModalContext from "./ModalContext";
import Modal from "../../UI/Modal/Modal";

interface ModalProviderProps {
  content: ReactNode;
  children: ReactNode;
}

export default function ModalProvider( { content, children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {setIsOpen(false); console.log('closed');}

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, content }}>
      { children }
      <Modal>{content}</Modal>
    </ModalContext.Provider>
  )
}
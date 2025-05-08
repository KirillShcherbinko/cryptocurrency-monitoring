import { ReactNode, useState } from "react";
import ModalContext from "./ModalContext";
import Modal from "../Modal";

interface ModalProviderProps {
  children: ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode) => {
    setContent(content);
    setIsOpen(true);
    document.documentElement.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
  };
  const closeModal = () => {
    setContent(null);
    setIsOpen(false);
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal>{content}</Modal>
    </ModalContext.Provider>
  );
}

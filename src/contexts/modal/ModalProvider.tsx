import { ReactNode, useState } from "react"
import ModalContext from "./ModalContext";

interface ModalProviderProps {
  children: ReactNode;
}

export default function ModalProvider( {children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
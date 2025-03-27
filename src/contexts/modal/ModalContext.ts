import { createContext, ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  content: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default ModalContext;
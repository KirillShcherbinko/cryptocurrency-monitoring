import { createContext, ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default ModalContext;
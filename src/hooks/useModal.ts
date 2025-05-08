import { useContext } from "react";
import ModalContext from "../UI/Modal/ModalContext/ModalContext";

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalContext must be within ModalProvider");
  return context;
}

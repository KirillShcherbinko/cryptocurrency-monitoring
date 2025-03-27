import Style from "./Modal.module.css";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../../hooks/useModal";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const { isOpen, closeModal } = useModal();

  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div
          className={Style.ModalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.div
            className={Style.ModalPosition}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: 30, transition: { duration: 0.2 } }}
          >
            <motion.div className={Style.ModalContent} onClick={handleClick}>
              <div className={Style.Modal}>{children}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

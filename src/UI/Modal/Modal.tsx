import Style from './Modal.module.css';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useModal } from '../../hooks/useModal';

interface IModalProps {
  children: ReactNode;
}

export default function Modal({children}: IModalProps) {
  const { isOpen, closeModal } = useModal();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeModal();
  };

  return createPortal (
    <AnimatePresence>
      {isOpen && (<motion.div
        className={Style.ModalOverlay}
        onClick={handleClick}
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
          <motion.div className={Style.ModalContent} >
            <div className={Style.Modal}>{children}</div>
          </motion.div>
        </motion.div>
      </motion.div>)}
    </AnimatePresence>,
    document.body
  )
}
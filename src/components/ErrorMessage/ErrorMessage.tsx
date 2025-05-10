import { motion } from "framer-motion";
import Style from "./ErrorMessage.module.css";
import { ReactNode, useEffect } from "react";
import Paragraph from "../../UI/Paragraph/Paragraph";

interface ErrorMessageProps {
  children: ReactNode;
  onClose: () => void;
  duration?: number;
}

export default function ErrorMessage({children, onClose, duration = 3000}: ErrorMessageProps) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <motion.div
      className={Style.ErrorMessage}
      layout="position"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.3 }}
    >
      <button className={Style.CloseButton} onClick={onClose}>✕</button>
      <Paragraph>{children}</Paragraph>
    </motion.div>
  );
}

import { AnimatePresence } from "framer-motion";
import Style from "./CryptoChatError.module.css";
import { useModal } from "../../../../hooks/useModal";
import { createPortal } from "react-dom";
import { useCryptoChat } from "../../hooks/useCryptoChat";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";

export default function CryptoChatError() {
  const { isOpen } = useModal();
  const { cryptoChatState, dispatchCryptoChat } = useCryptoChat();

  const { errorMessages } = cryptoChatState;
  const closeErrorMessage = (id: string) => {
    dispatchCryptoChat({ type: "remove_error_message", payload: id });
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={Style.CryptoChatError}>
      <AnimatePresence>
        {errorMessages.map((errorMessage) => (
          <ErrorMessage
            key={errorMessage.id}
            onClose={() => closeErrorMessage(errorMessage.id)}
          >
            {errorMessage.text}
          </ErrorMessage>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}

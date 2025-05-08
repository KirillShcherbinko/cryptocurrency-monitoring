import { ReactNode, useReducer } from "react";
import CryptoChatContext from "./CryptoChatContext";
import { cryptoChatReducer } from "../../reducers/cryptoChatReducer";
import { initialState } from "../../constants";

interface CryptoChatProviderProps {
  children: ReactNode;
}

export default function CryptoChatProvider({
  children,
}: CryptoChatProviderProps) {
  const [cryptoChatState, dispatchCryptoChat] = useReducer(
    cryptoChatReducer,
    initialState,
  );

  return (
    <CryptoChatContext.Provider value={{ cryptoChatState, dispatchCryptoChat }}>
      {children}
    </CryptoChatContext.Provider>
  );
}

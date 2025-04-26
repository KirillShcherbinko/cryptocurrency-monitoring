import { createContext } from "react";

export interface InputContextType {
  input: string;
  setinput: (query: string) => void;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

export default InputContext;

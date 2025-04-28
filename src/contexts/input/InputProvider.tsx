import { ReactNode, useState } from "react";
import InputContext from "./InputContext";

interface inputProviderProps {
  children: ReactNode;
}

export default function inputProvider({
  children,
}: inputProviderProps) {
  const [input, setInput] = useState<string>("");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
}

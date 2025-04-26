import { ReactNode, useState } from "react";
import InputContext from "./InputContext";

interface inputProviderProps {
  children: ReactNode;
}

export default function inputProvider({
  children,
}: inputProviderProps) {
  const [input, setinput] = useState<string>("");

  return (
    <InputContext.Provider value={{ input, setinput }}>
      {children}
    </InputContext.Provider>
  );
}

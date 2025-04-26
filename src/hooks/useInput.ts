import { useContext } from "react";
import InputContext, { InputContextType } from "../contexts/input/InputContext";

export function useInput(): InputContextType {
  const context = useContext(InputContext);
  if (!context) throw new Error("InputContext must be within InputProvider");
  return context;
}

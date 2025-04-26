import Style from "./Input.module.css";
import { useInput } from "../../hooks/useInput";
import classNames from "classnames";

interface InputProps {
  className?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
}

export default function Input({
  className,
  placeholder,
  minLength,
  maxLength,
}: InputProps) {
  const { input, setinput } = useInput();

  return (
    <input
      className={classNames(Style.Input, className ? className : null)}
      type="text"
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      value={input}
      onChange={(evt) => setinput(evt.target.value)}
    />
  );
}

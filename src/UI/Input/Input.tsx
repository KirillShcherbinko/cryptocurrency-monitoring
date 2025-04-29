import Style from "./Input.module.css";
import classNames from "classnames";
import { ChangeEvent } from "react";

interface InputProps {
  className?: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
}

export default function Input({
  className,
  value,
  onChange,
  placeholder,
  minLength,
  maxLength,
}: InputProps) {

  return (
    <input
      className={classNames(Style.Input, className ? className : null)}
      type="text"
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
    />
  );
}

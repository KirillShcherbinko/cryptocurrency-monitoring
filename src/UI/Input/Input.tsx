import Style from "./Input.module.css";
import classNames from "classnames";
import { ChangeEvent, KeyboardEvent } from "react";

interface InputProps {
  className?: string;
  name: string;
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (evt: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
}

export default function Input({
  className,
  name,
  value,
  onChange,
  onKeyDown,
  placeholder,
  minLength,
  maxLength,
}: InputProps) {

  return (
    <input
      className={classNames(Style.Input, className ? className : null)}
      name={name}
      id={name}
      type="text"
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

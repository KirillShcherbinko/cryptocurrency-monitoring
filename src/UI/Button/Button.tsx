import classNames from "classnames";
import Style from "./Button.module.css";
import { ReactNode } from "react";

interface IButtonProps {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({
  className,
  onClick,
  disabled,
  children,
}: IButtonProps) {
  return (
    <button
      className={classNames(
        Style.Button,
        disabled ? Style.Disabled : null,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

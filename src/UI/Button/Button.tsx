import classNames from "classnames";
import Style from "./Button.module.css";
import { ReactNode, RefObject } from "react";

interface IButtonProps {
  ref?: RefObject<HTMLButtonElement>
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({
  ref,
  className,
  onClick,
  disabled,
  children,
}: IButtonProps) {
  return (
    <button
      ref={ref}
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

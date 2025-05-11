import classNames from "classnames";
import Style from "./Symbol.module.css";
import { ReactNode } from "react";

interface SymbolProps {
  className?: string;
  children: ReactNode;
}

export default function Symbol({ className, children }: SymbolProps) {
  return (
    <h4 className={classNames(Style.Symbol, className ? className : null)}>
      {children}
    </h4>
  );
}

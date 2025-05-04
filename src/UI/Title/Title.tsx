import classNames from "classnames";
import Style from "./Title.module.css";
import { ReactNode } from "react";

interface TitleProps {
  className?: string;
  children: ReactNode;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h1 className={classNames(Style.Title, className ? className : null)}>
      {children}
    </h1>
  );
}

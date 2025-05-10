import classNames from "classnames";
import Style from "./Title.module.css";
import { ReactNode } from "react";

type TitleType = "normal" | "big" | "small" | "huge";

interface TitleProps {
  type?: TitleType;
  className?: string;
  children: ReactNode;
}

export default function Title({ type, children, className }: TitleProps) {
  return (
    <h1
      className={classNames(
        Style.Title,
        type === "big"
          ? Style.Big
          : type === "small"
          ? Style.Small
          : type === "huge"
          ? Style.Huge
          : null,
        className ? className : null
      )}
    >
      {children}
    </h1>
  );
}

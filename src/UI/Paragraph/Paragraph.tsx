import classNames from "classnames";
import Style from "./Paragraph.module.css";
import { ReactNode } from "react";

type ParagraphType = "normal" | "small" | "big";

interface ParagraphProps {
  type?: ParagraphType;
  className?: string;
  children: ReactNode;
}

export default function Paragraph({
  className,
  type,
  children,
}: ParagraphProps) {
  return (
    <p
      className={classNames(
        Style.Paragraph,
        type === "big" ? Style.Big : type === "small" ? Style.Small : null,
        className ? className : null
      )}
    >
      {children}
    </p>
  );
}

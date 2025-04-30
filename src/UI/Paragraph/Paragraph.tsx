import classNames from "classnames";
import Style from "./Paragraph.module.css";
import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={classNames(Style.Paragraph, className ? className : null)}>
      {children}
    </p>
  );
}

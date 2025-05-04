import classNames from "classnames";
import Style from "./Paragraph.module.css";
import { ReactNode, RefObject } from "react";

interface ParagraphProps {
  ref?: RefObject<HTMLParagraphElement>;
  className?: string;
  children: ReactNode;
}

export default function Paragraph({
  ref,
  className,
  children,
}: ParagraphProps) {
  return (
    <p
      ref={ref}
      className={classNames(Style.Paragraph, className ? className : null)}
    >
      {children}
    </p>
  );
}

import Style from "./Paragraph.module.css";
import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <p className={Style.Paragraph}>{children}</p>
  )
}

import Style from "./Title.module.css";
import { ReactNode } from "react"

interface TitleProps {
  children: ReactNode;
}

export default function Title({children}: TitleProps) {
  return (
    <h1 className={Style.Title}>{children}</h1>
  );
}
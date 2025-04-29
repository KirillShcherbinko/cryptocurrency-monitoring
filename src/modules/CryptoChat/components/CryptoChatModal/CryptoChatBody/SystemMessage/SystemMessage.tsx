import Style from "./SystemMessage.module.css";

interface SystemMessageProps {
  text: string;
}

export default function SystemMessage({text}: SystemMessageProps) {
  return (
    <div className={Style.SystemMessage}>{text}</div>
  );
}
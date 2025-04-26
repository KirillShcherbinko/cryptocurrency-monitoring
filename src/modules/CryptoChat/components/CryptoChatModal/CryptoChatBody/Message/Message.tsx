import Style from "./Message.module.css";
import Paragraph from "../../../../../../UI/Paragraph/Paragraph";
import classNames from "classnames";

interface MessageProps {
  username: string;
  text: string;
}

export default function Message({ username, text }: MessageProps) {
  return (
    <div className={classNames(Style.Message, username === 'me' ? Style.MyMessage: null)}>
      <Paragraph>
        {text}
      </Paragraph>
    </div>
  );
}
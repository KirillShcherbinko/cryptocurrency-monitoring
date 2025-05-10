import Style from "./ErrorScreen.module.css";
import Card from "../Card/Card";
import Button from "../../UI/Button/Button";
import Title from "../../UI/Title/Title";
import Paragraph from "../../UI/Paragraph/Paragraph";

interface ErrorScreenProps {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function ErrorScreen({
  title,
  description,
  image,
  buttonText = "",
  onClick,
}: ErrorScreenProps) {
  return (
    <Card className={Style.ErrorScreen}>
      <img className={Style.Image} src={image} alt={title} />
      <Title type="big">{title}</Title>
      <Paragraph type="big">{description}</Paragraph>
      {onClick && (
        <Button className={Style.Button} onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </Card>
  );
}

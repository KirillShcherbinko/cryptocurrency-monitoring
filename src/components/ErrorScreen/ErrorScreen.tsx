import Style from "./ErrorScreen.module.css";
import Card from "../Card/Card";
import Button from "../../UI/Button/Button";
import Title from "../../UI/Title/Title";
import Paragraph from "../../UI/Paragraph/Paragraph";

interface ErrorScreenProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  onClick: () => void;
}

export default function ErrorScreen({
  title,
  description,
  image,
  buttonText,
  onClick,
}: ErrorScreenProps) {
  return (
    <Card className={Style.ErrorScreen}>
      <img className={Style.ErrorImage} src={image} alt={title} />
      <Title className={Style.ErrorTitle}>{title}</Title>
      <Paragraph className={Style.ErrorParagraph}>{description}</Paragraph>
      <Button className={Style.ErrorButton} onClick={onClick}>
        {buttonText}
      </Button>
    </Card>
  );
}

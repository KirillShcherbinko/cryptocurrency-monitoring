import Style from "./CryptoCard.module.css";
import PercentageIndicator from "../../../../components/PercentageIndicator/PercentageIndicator";
import { useData } from "../../../../hooks/useData";
import { useModal } from "../../../../hooks/useModal";
import Icon from "../../../../UI/Icon/Icon";
import Symbol from "../../../../UI/Symbol/Symbol";
import Paragraph from "../../../../UI/Paragraph/Paragraph";
import { ICryptoData } from "../../types";
import { rounded } from "../../../../utils";
import { PRICE_DECIMALS, PERCENTAGE_DECIMALS } from "../../../../constants";
import Card from "../../../../components/Card/Card";

export default function CryptoCard() {
  const data = useData<ICryptoData>();
  const { openModal } = useModal();

  if (!data) return null;

  const { name, image, symbol, current_price, price_change_percentage_24h } = data;

  return (
    <Card
      className={Style.CryptoCard}
      onClick={openModal}
      hoverEffect={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <Icon iconSrc={image} iconAlt={name} />
      <Symbol>{symbol}</Symbol>
      <Paragraph>{name}</Paragraph>
      <Paragraph>{rounded(current_price, PRICE_DECIMALS)}</Paragraph>
      <PercentageIndicator
        percentage={rounded(price_change_percentage_24h, PERCENTAGE_DECIMALS)}
      />
    </Card>
  );
}

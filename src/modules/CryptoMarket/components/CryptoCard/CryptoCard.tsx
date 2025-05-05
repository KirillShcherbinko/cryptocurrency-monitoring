import Style from "./CryptoCard.module.css";
import PercentageIndicator from "../../../../components/PercentageIndicator/PercentageIndicator";
import { useData } from "../../../../hooks/useData";
import { useModal } from "../../../../hooks/useModal";
import Symbol from "../../../../UI/Symbol/Symbol";
import Paragraph from "../../../../UI/Paragraph/Paragraph";
import { CryptoCardData } from "../../types";
import { rounded } from "../../../../utils";
import { PRICE_DECIMALS, PERCENTAGE_DECIMALS } from "../../../../constants";
import Card from "../../../../components/Card/Card";

export default function CryptoCard() {
  const data = useData<CryptoCardData>();
  const { openModal } = useModal();

  if (!data) return null;

  const { name, image, symbol, current_price, price_change_percentage_24h } =
    data.card;
  const currensySymbol = data.currensySymbol;

  return (
    <Card
      className={Style.CryptoCard}
      onClick={openModal}
      hoverEffect={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <img className={Style.CryptoCardImage} src={image} alt={name} />
      <div className={Style.CryptoCardInfo}>
        <Symbol>{symbol}</Symbol>
        <div className={Style.CryptoCardBadge}>
          <Paragraph>{name}</Paragraph>
          <Paragraph>{`${currensySymbol} ${rounded(
            current_price,
            PRICE_DECIMALS
          )}`}</Paragraph>
        </div>
        <PercentageIndicator
          percentage={rounded(price_change_percentage_24h, PERCENTAGE_DECIMALS)}
        />
      </div>
    </Card>
  );
}

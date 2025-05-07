import Style from "./CryptoCard.module.css";
import PercentageIndicator from "../../../../components/PercentageIndicator/PercentageIndicator";
import { useModal } from "../../../../hooks/useModal";
import Symbol from "../../../../UI/Symbol/Symbol";
import Paragraph from "../../../../UI/Paragraph/Paragraph";
import { rounded } from "../../../../utils";
import { PRICE_DECIMALS, PERCENTAGE_DECIMALS } from "../../../../constants";
import Card from "../../../../components/Card/Card";
import CryptoCardModal from "../CryptoCardModal/CryptoCardModal";
import { useCryptoData } from "../../hooks/useCryptoData";
import { useMemo } from "react";

export default function CryptoCard() {
  const data = useCryptoData();
  const { openModal } = useModal();

  const { name, image, symbol, current_price, price_change_percentage_24h } =
    data.cryptoData;
  const currensySymbol = data.currencySymbol;
  const modal = useMemo(() => <CryptoCardModal />, []);

  return (
    <Card
      className={Style.CryptoCard}
      onClick={() => openModal(modal)}
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

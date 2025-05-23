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

  const effect = { scale: 1.05, transition: { duration: 0.2 } };
  console.log(price_change_percentage_24h);

  return (
    <Card
      className={Style.CryptoCard}
      onClick={() => openModal(modal)}
      hoverEffect={effect}
      tapEffect={effect}
    >
      <img className={Style.Image} src={image} alt={name} />
      <div className={Style.Info}>
        <Symbol className={Style.Symbol}>{symbol.toUpperCase()}</Symbol>
        <div className={Style.Badge}>
          <Paragraph className={Style.Paragraph}>{name}</Paragraph>
          <Paragraph className={Style.Paragraph}>{`${currensySymbol} ${rounded(
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

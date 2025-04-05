import Style from "./CryptoCard.module.css";
import PercentageIndicator from "../../../../components/PercentageIndicator/PercentageIndicator";
import { useData } from "../../../../hooks/useData";
import { useModal } from "../../../../hooks/useModal";
import Icon from "../../../../UI/Icon/Icon";
import Symbol from "../../../../UI/Symbol/Symbol";
import Paragraph from "../../../../UI/Paragraph/Paragraph";
import { ICryptoData } from "../../types";
import { rounded } from "../../../../utils";
import { PRICE_DECIMALS, PERCENTAGE_DECIMALS } from "../../constants/decimalsConstants";
import Card from "../../../../components/Card/Card";


export default function CryptoCard() {
  const data = useData<ICryptoData>();
  const { openModal } = useModal();

  return data && (
    <Card
      className={Style.CryptoCard}
      onClick={openModal}
      hoverEffect={{ scale: 1.1, transition: { duration: 0.2 } }}
    >
        <Icon iconSrc={data.image} iconAlt={data.name}/>
        <Symbol>{data.symbol}</Symbol>
        <Paragraph>{data.name}</Paragraph>
        <Paragraph>{rounded(data.current_price, PRICE_DECIMALS)}</Paragraph>
        <PercentageIndicator
          percentage={rounded(data.price_change_percentage_24h, PERCENTAGE_DECIMALS)}
        />
    </Card>
  );
}

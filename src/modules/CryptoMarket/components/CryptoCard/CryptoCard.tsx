import Style from "./CryptoCard.module.css";
import PercentageIndicator from "../../../../components/PercentageIndicator/PercentageIndicator";
import Icon from "../../../../UI/Icon/Icon";
import { useData } from "../../../../hooks/useData";
import { ICryptoData } from "../../types";

export default function CryptoCard() {
  const data = useData<ICryptoData>();

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className={Style.CryptoCard}>
      <h1>{data.name}</h1>
      <p>{data.symbol}</p>
      <Icon />
      <p>
        {data.current_price}
      </p>
      <PercentageIndicator percentage={data.price_change_percentage_24h} />
      <></>
    </div>
  );
}

import Style from "./CryptoCard.module.css";
import { ICryptoData, PercentageColor } from "../types";
import { rounded } from "../../utils";

interface ICryptoDataProps {
  data: ICryptoData;
  onClick: () => void;
}

export default function CryptoCard({ data, onClick }: ICryptoDataProps) {
  // Вычисление цвета в зависимости от процента
  function setColor(priceChangePercentage: number): PercentageColor {
    if (priceChangePercentage < 0) return "red";
    else if (priceChangePercentage === 0) return "white";
    return "green";
  }

  return (
    <div className={Style.CryptoCard} onClick={onClick}>
      <h1>{data.name}</h1>
      <p>{data.symbol}</p>
      <img src={data.image} alt="Currency logo" />
      <p>{data.currentPrice}</p>
      <p style={{ color: setColor(data.priceChangePercentage) }}>
        {data.priceChangePercentage}
      </p>
      <></>
    </div>
  );
}

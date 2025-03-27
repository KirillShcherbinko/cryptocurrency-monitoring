import { useData } from "../../hooks/useData";
import Style from "./CryptoCardInfo.module.css";

export default function CryptoCardInfo() {
  const data = useData<{ name: string; currentPrice: number }>();
  return (
    data && (
      <div className={Style.CryptoCardInfo}>
        <h2 className={Style.CryptoCardInfoParagraph}>{data.name}</h2>
        <p className={Style.CryptoCardInfoParagraph}>{data.currentPrice}</p>
      </div>
    )
  );
}

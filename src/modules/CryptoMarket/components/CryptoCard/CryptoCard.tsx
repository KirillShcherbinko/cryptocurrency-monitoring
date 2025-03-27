import Style from "./CryptoCard.module.css";
import PercentageIndicator from "../../../../components/PercentageIndicator/PercentageIndicator";
import { useData } from "../../../../hooks/useData";
import { useModal } from "../../../../hooks/useModal";
import CryptoCardHeader from "../../../../components/CryptoCardHeader/CryptoCardHeader";

export default function CryptoCard() {
  const data = useData<{
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
  }>();
  const { openModal } = useModal();

  if (!data) return null;
  return (
    <div className={Style.CryptoCard} onClick={openModal}>
      <CryptoCardHeader />
      <PercentageIndicator percentage={data.price_change_percentage_24h} />
    </div>
  );
}

import { useData } from "../../../../hooks/useData";
import Title from "../../../../UI/Title/Title";
import CryptoLineChart from "../CryptoLineChart/CryptoLineChart";
import { CryptoCardData } from "../../types";

export default function CryptoCardModal() {
  const data = useData<CryptoCardData>();

  if (!data) return null;

  const { card } = data;

  return (
    <div>
      <Title>{card.name}</Title>
      <CryptoLineChart />
    </div>
  );
}

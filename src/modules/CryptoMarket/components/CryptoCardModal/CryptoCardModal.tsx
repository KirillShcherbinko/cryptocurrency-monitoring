import Title from "../../../../UI/Title/Title";
import CryptoLineChart from "../CryptoLineChart/CryptoLineChart";
import { useCryptoData } from "../../hooks/useCryptoData";

export default function CryptoCardModal() {
  const {cryptoData} = useCryptoData();

  return (
    <div>
      <Title>{cryptoData.name}</Title>
      <CryptoLineChart />
    </div>
  );
}

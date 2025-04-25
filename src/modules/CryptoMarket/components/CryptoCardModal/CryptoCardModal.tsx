import { useData } from "../../../../hooks/useData";
import Title from "../../../../UI/Title/Title";
import { ICryptoData } from "../../types";
import CryptoLineChart from "../CryptoLineChart/CryptoLineChart";

export default function CryptoCardModal() {
const data = useData<ICryptoData>();

  return (
    <div>
      <Title>{data?.name}</Title>
      <CryptoLineChart />
    </div>
  );
}

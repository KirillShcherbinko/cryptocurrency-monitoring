import { useData } from "../../../../hooks/useData";
import { ICryptoData } from "../../types";
import CryptoLineChart from "../CryptoLineChart/CryptoLineChart";

export default function CryptoCardModal() {
const data = useData<ICryptoData>();

  return (
    <div>
      <CryptoLineChart />
    </div>
  );
}

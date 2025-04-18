import { useData } from "../../../../hooks/useData";
import LineChart from "../../../../UI/LineChart/LineChart";
import { ICryptoData } from "../../types";

export default function CryptoCardModal() {
  const data = useData<ICryptoData>();

  return (
    data && (
      <div>
        {data.sparkline_in_7d.price.length ? (
          <LineChart
            labelName={data.id}
            sparkline={data.sparkline_in_7d.price}
          />
        ) : (
          <p>No data</p>
        )}
      </div>
    )
  );
}

import { CHART_DECIMALS } from "../../../../constants";
import { useData } from "../../../../hooks/useData";
import LineChart, { TooltipConfig, } from "../../../../UI/LineChart/LineChart";
import { rounded } from "../../../../utils";
import { ICryptoData, XAxisConfig, YAxisConfig } from "../../types";


export default function CryptoLineChart() {
  const data = useData<ICryptoData>();

  if (!data) return null;

  const {id, sparkline_in_7d} = data;
  const sparkline = sparkline_in_7d.price || [];

  const labels = Array.from(
    sparkline.map((_, i) => {
      const date = new Date();
      date.setHours(date.getHours() - (sparkline.length - 1 - i));
      return date;
    })
  );

  const tooltipConfig: TooltipConfig = {
    callbacks: {
      label: function (context) {
        const value = context.parsed.y;
        return `Price: ${rounded(value, CHART_DECIMALS)} $`;
      },
      title: function (contexts) {
        const date = contexts[0].label.split(".").join(" ");
        return `Date: ${date}`;
      },
    },
  };

  const xAxisConfig: XAxisConfig = {
    type: "time",
    time: {
      unit: "hour",
      tooltipFormat: "dd.MMM.",
    },
    ticks: {
      callback: (value: any, index: number): string => {
        return index % 24 === 0
          ? new Date(value as number).toLocaleDateString("en-EN", {
              day: "2-digit",
              month: "short",
            })
          : "";
      },
      maxTicksLimit: 7,
      autoSkip: false,
      maxRotation: 0,
      minRotation: 0,
    },
  };

  const yAxisConfig: YAxisConfig = {
    type: "linear",
    ticks: {
      callback: (value: any, _: number): string => {
        return `${rounded(value, CHART_DECIMALS)} $`;
      },
    },
  };

  return (
      <div>
        {sparkline.length ? (
          <LineChart
            labelName={id}
            sparkline={sparkline}
            labels={labels}
            tooltipConfig={tooltipConfig}
            xAxisConfig={xAxisConfig}
            yAxisConfig={yAxisConfig}
          />
        ) : (
          <p>No data</p>
        )}
      </div>
  );
}

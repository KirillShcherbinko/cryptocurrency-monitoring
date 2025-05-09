import Style from "./LineChart.module.css";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { DeepPartial } from "utility-types";
import type { XOR } from 'ts-xor';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  TimeScale,
  ChartOptions,
  Filler,
  Tooltip,
  CategoryScaleOptions,
  LogarithmicScaleOptions,
  TimeScaleOptions,
  CartesianScaleOptions,
  TooltipOptions,
  ChartData,
} from "chart.js";
import { createData } from "./config/dataConfig";
import { createOptions } from "./config/optionsConfig";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  TimeScale,
  Filler,
  Tooltip
);

export type TooltipConfig = DeepPartial<TooltipOptions>;

type AxisScaleType = 'linear' | 'logarithmic' | 'category' | 'time' | 'timeseries' | undefined;
export type TypedScale<T extends AxisScaleType, O> = { type?: T } & DeepPartial<O>;

export type AxisConfig = XOR<
  TypedScale<'time', TimeScaleOptions>,
  TypedScale<'linear', CartesianScaleOptions>,
  TypedScale<'category', CategoryScaleOptions>,
  TypedScale<'logarithmic', LogarithmicScaleOptions>,
  TypedScale<'timeseries', TimeScaleOptions>
>;

interface LineChartProps<T> {
  labelName: string;
  sparkline: number[];
  labels: T[];
  tooltipConfig?: TooltipConfig
  xAxisConfig?: AxisConfig;
  yAxisConfig?: AxisConfig;
}

export default function LineChart<T>({
  labelName,
  sparkline,
  labels,
  tooltipConfig,
  xAxisConfig,
  yAxisConfig,
}: LineChartProps<T>) {
  const sparklineLastIndex = sparkline.length - 1;

  const color =
    sparkline[0] < sparkline[sparklineLastIndex]
    ? "rgba(56, 181, 220, 1)"
    : "rgba(255, 168, 0, 1)";
    
  const backgroundColor =
    sparkline[0] < sparkline[sparklineLastIndex]
      ? "rgba(56, 181, 220, 0.2)"
      : "rgba(255, 168, 0, 0.2)";

  const data: ChartData<"line"> = createData(labels, sparkline, color, backgroundColor);
  const options: ChartOptions<"line"> = createOptions(tooltipConfig, xAxisConfig, yAxisConfig);

  return (
    <div className={Style.LineChart}>
      <Line
        datasetIdKey={labelName}
        data={data}
        options={options}
      />
    </div>
  );
}

import { ChartData } from "chart.js";

export const createData = <T>(
  labels: T[],
  sparkline: number[],
  color: string,
  backgroundColor: string,
): ChartData<"line">=> {
  return {
    labels: labels,
    datasets: [
      {
        label: "",
        data: sparkline,
        borderColor: color,
        backgroundColor: backgroundColor,
        clip: false,
        fill: "origin",
        tension: 0.2,
        pointBorderWidth: 0,
        pointBorderColor: color,
        pointRadius: 0,
        pointHitRadius: 1000,
        pointHoverRadius: 3,
        pointBackgroundColor: color,
      },
    ],
  };
}
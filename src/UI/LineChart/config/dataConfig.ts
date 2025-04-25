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
        fill: "origin",
        tension: -0.1,
        pointRadius: 0,
        pointHitRadius: 10,
        pointHoverRadius: 3,
        pointBackgroundColor: color,
      },
    ],
  };
}
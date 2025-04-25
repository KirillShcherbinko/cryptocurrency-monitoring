import { ChartOptions } from "chart.js";
import { AxisConfig, TooltipConfig } from "../LineChart";

export const createOptions = (
  tooltipConfig?: TooltipConfig,
  xAxisConfig?: AxisConfig,
  yAxisConfig?: AxisConfig, 
): ChartOptions<"line"> => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        ...(tooltipConfig || {}),
        titleFont: {
          family: "Poppins-Medium, Arial, sans-serif",
          weight: 600,
          size: 14,
        },
        bodyFont: {
          family: "Poppins-Regular, Arial, sans-serif",
          size: 12,
        },
        titleColor: "#FFFFFF",
        bodyColor: "#AB9F9F",
        displayColors: false,
        animation: {
          duration: 200,
        },
      },
      legend: { display: false },
    },
    scales: {
      x: {
        ...(xAxisConfig as unknown || {}),
        grid: {
          display: false,
          drawTicks: false,
        },
        ticks: {
          ...(xAxisConfig?.ticks || {}),
          padding: 10,
          align: "start",
          color: "#645F5F",
          font: {
            family: "Poppins-Regular, Arial, sans-serif",
            size: 12,
          },
        },
      },
      y: {
        ...(yAxisConfig as unknown || {}),
        grid: {
          display: false,
          drawTicks: false,
        },
        ticks: {
          ...(yAxisConfig?.ticks || {}),
          padding: 10,
          align: "end",
          color: "#645F5F",
          font: {
            family: "Poppins-Regular, Arial, sans-serif",
            size: 12,
          },
        },
        border: {
          display: false,
        },
      },
    },
  };
}
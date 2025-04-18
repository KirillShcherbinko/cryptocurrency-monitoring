import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
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
} from "chart.js";
import { rounded } from "../../utils";
import { CHART_DECIMALS } from "../../constants";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  TimeScale,
  Filler,
  Tooltip,
);

interface LineChartProps {
  labelName: string;
  sparkline: number[];
}

export default function LineChart({ labelName, sparkline }: LineChartProps) {
  const sparklineLastIndex = sparkline.length - 1;

  const color = sparkline[0] < sparkline[sparklineLastIndex]
    ? "#38B5DC"
    : "#FFA800";
  const backgroundColor = sparkline[0] < sparkline[sparklineLastIndex]
    ? "rgba(56, 181, 220, 0.2)"
    : "rgba(255, 168, 0, 0.2)";

  const labels = Array.from(
    sparkline.map((_, i) => {
      const date = new Date();
      date.setHours(date.getHours() - (sparkline.length - 1 - i));
      return date;
    })
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: sparkline,
        color: color,
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

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed.y;
            return `Price: ${rounded(value, CHART_DECIMALS)} $`;
          },
          title: function (contexts) {
            const date = contexts[0].label.split('.').join(' ');
            return `Date: ${date}`;
          }
        },
        titleFont: {
          family: 'Poppins-Medium, Arial, sans-serif',
          weight: 600,
          size: 14,
        },
        bodyFont: {
          family: 'Poppins-Regular, Arial, sans-serif',
          size: 12,
        },
        titleColor: '#FFFFFF',
        bodyColor: '#AB9F9F',
        displayColors: false,
        animation: {
          duration: 200,
        },
      },
      legend: { display: false },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "hour",
          tooltipFormat: "dd.MMM.",
        },
        ticks: {
          callback: (value: any, index: number) => {
            return index % 24 === 0
              ? new Date(value as number).toLocaleDateString("en-EN", {
                  day: "2-digit",
                  month: "short",
                })
              : "";
          },
          padding: 10,
          autoSkipPadding: 5,
          autoSkip: true,
          maxTicksLimit: Math.ceil(labels.length / 24),
          maxRotation: 90,
          minRotation: 0,
          align: "start",
          color: "#645F5F",
          font: {
            family: "Poppins-Regular, Arial, sans-serif",
            size: 12,
          },
        },
        grid: {
          drawTicks: false,
        },
      },
      y: {
        ticks: {
          callback: (value: any) => {
            return `${rounded(value, CHART_DECIMALS)} $`;
          },
          padding: 10,
          align: "end",
          color: "#645F5F",
          font: {
            family: "Poppins-Regular, Arial, sans-serif",
            size: 12,
          },
        },
        grid: {
          drawTicks: false,
        },
      },
    },
  };

  return (
    <div>
      <Line
        datasetIdKey={labelName}
        data={data}
        options={options}
        width={800}
        height={600}
      />
    </div>
  );
}

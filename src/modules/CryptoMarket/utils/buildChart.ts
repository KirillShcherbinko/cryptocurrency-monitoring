export default function buildChart(sparkline: number[], isGrid: boolean) {
  const labels: number[] = sparkline.map((_item, index) => {
    return index;
  });

  const data = {
    labels: labels,
    datasets: [{
        data: sparkline,
        fill: false,
        borderColor: "rgb(56,181,220)",
        tension: 0.1,
      },
    ],
  };

  const chartConfig = {
    type: "line",
    data,
  };
}

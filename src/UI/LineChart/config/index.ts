import { Chart, ChartItem } from "chart.js"

export const createConfig = (label: string, data: number[], color: string) => {
  const ctx: ChartItem = document.getElementById(label) as ChartItem;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [{
        label,
        data,
        fill: false,
        borderColor: color,
        tension: 0.1
      }]
    }
    
  })
}


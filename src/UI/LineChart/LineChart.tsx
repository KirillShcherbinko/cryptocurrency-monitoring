import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  TimeScale,
  ChartOptions,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, TimeScale);

interface LineChartProps {
  labelName: string;
  sparkline: number[];
}

export default function LineChart({ labelName, sparkline }: LineChartProps) {
  const color = sparkline[0] < sparkline[sparkline.length - 1] ? '#38B5DC' : '#FFA800';

  const labels = Array.from({ length: sparkline.length }, (_, i) => {
    const date = new Date();
    date.setHours(date.getHours() - (sparkline.length - 1 - i));
    console.log(date);
    return date;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: '',
        data: sparkline,
        borderColor: color,
        backgroundColor: color,
      }
    ]
  }

  const options: ChartOptions<'line'> = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          tooltipFormat: 'dd.MMM.'
        },
        ticks: {
          callback: function(value, index) {
            // Показать только метки с шагом, например, 24 часа
            return index % 24 === 0 ? new Date(value as number).toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' }) : '';
          },
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0
        }
      },
    }
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
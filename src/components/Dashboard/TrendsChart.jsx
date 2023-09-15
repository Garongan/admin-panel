import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import "./TrendsChart.css";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    colors: {
      enabled: false,
    },
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Today Trends",
    },
    tooltip: {
      enabled: true,
      mode: "y",
      intersect: false,
    },
  },
  elements: {
    line: {
      cubicInterpolationMode: "monotone",
    },
  },
  scales: {
    x: {
      type: "linear",
      ticks: {
        stepSize: 1,
      },
      title: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      type: "linear",
      beginAtZero: true,
      ticks: {
        stepSize: 10,
      },
      title: {
        display: false,
      },
    },
  },
};

const labels = Array.from({ length: 22 }, (_, index) => index + 1);
let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.01)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.1)");
  }

  return gradient;
}

const data = {
  labels,
  datasets: [
    {
      label: "Today",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return;
        }
        return getGradient(ctx, chartArea);
      },
      fill: true,
    },
    {
      label: "Yesterday",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return;
        }
        return getGradient(ctx, chartArea);
      },
      fill: true,
    },
  ],
};

export default function TrendsChart() {
  const cartInformations = [
    { id: 1, title: "Resolved", sum: 449 },
    { id: 2, title: "Recieved", sum: 426 },
    { id: 3, title: "Avg First Response Time", sum: "2h 30m" },
    { id: 4, title: "Avg Response Time", sum: "4h 15m" },
    { id: 5, title: "Resolution with SLA", sum: `95%` },
  ];

  return (
    <div className="chart-wrapper">
      <Line options={options} data={data} className="chart" />
      <div className="chart-informations">
        {cartInformations.map((charInformation) => (
          <div className="chart-information" key={charInformation.id}>
            <div className="title">{charInformation.title}</div>
            <div className="sum">{charInformation.sum}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import "./TrendsChart.css";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Rounded Line Chart",
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
      title: {
        display: true,
        text: "Time",
      },
    },
    y: {
      type: "linear",
      beginAtZero: true,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};

const labels = [0, 1, 2, 3, 4, 5, 6];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function TrendsChart() {
  const cartInformations = [
    {id: 1, title: 'Resolved', sum: 449 },
    {id: 2, title: 'Recieved', sum: 426 },
    {id: 3, title: 'Avg First Response Time', sum: '2h 30m' },
    {id: 4, title: 'Avg Response Time', sum: '4h 15m' },
    {id: 5, title: 'Resolution with SLA', sum: `95%` },
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

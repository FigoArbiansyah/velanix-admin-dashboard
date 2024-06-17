import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { customTheme } from "../../../helpers/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Carrying Cost",
    },
  },
};

const labels = ["Mon", "Tues", "Wednes", "Thurs", "Fri"];
const data1 = [5, 25, 10, 35, 20];

const data = {
  labels,
  datasets: [
    {
      label: "Cost",
      data: data1,
      backgroundColor: customTheme.colors.charts.blue,
    },
  ],
};

export function CarryingCostChart() {
  return <Bar options={options} data={data} />;
}

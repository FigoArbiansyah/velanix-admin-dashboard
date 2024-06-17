import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { customTheme } from "../../../helpers/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Stock Prices Over Time",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 80,
    },
  },
};

// Labels for all months of the year
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Sample stock prices with values from 0 to 80
const stockPrices1 = [10, 20, 15, 30, 40, 35, 25, 50, 60, 55, 45, 70];
const stockPrices2 = [5, 25, 10, 35, 20, 45, 15, 55, 25, 65, 30, 80];

const data = {
  labels,
  datasets: [
    {
      label: "Stock 1",
      data: stockPrices1,
      borderColor: customTheme.colors.charts.blue,
      backgroundColor: customTheme.colors.charts.blue,
      borderWidth: 6,
    },
    {
      label: "Stock 2",
      data: stockPrices2,
      borderColor: customTheme.colors.charts.green,
      backgroundColor: customTheme.colors.charts.green,
      borderWidth: 6,
    },
  ],
};

export function StockChart() {
  return <Line options={options} data={data} />;
}

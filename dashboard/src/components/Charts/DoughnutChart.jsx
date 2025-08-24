import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

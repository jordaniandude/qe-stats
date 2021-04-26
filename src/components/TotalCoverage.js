import React from "react";
import { Pie } from "react-chartjs-2";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
    title: {
      display: true,
      text: "Total Test Coverage %",
    },
  },
};

const TotalCoverage = ({ stats }) => {
  let totalTests = 0,
    totalAutomated = 0;
  Object.keys(stats).forEach((app) => {
    totalTests += stats[app].total;
    totalAutomated += stats[app].automated;
  });
  const automatedCoverage = Math.ceil(Number(totalAutomated / totalTests) * 100);
  const data = {
    labels: ["Automated", "Not Automation"],
    datasets: [
      {
        data: [automatedCoverage, 100-automatedCoverage],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="center">
      <Pie data={data} options={options} />
    </div>
  );
};

export default TotalCoverage;

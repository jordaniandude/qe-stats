import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Overall Test Coverage % / Per Application",
    },
  },
};

const OverallCoverage = ({ stats }) => {
  let sce = 0,
    cs = 0,
    trends = 0,
    utt = 0,
    mm = 0;

  Object.keys(stats).forEach((app) => {
    switch (app) {
      case "sce":
        sce = Math.ceil(Number(stats[app].automated / stats[app].total) * 100);
        break;
      case "cs":
        cs = Math.ceil(Number(stats[app].automated / stats[app].total) * 100);
        break;
      case "trends":
        trends = Math.ceil(
          Number(stats[app].automated / stats[app].total) * 100
        );
        break;
      case "utt":
        utt = Math.ceil(Number(stats[app].automated / stats[app].total) * 100);
        break;
      case "mm":
        mm = Math.ceil(Number(stats[app].automated / stats[app].total) * 100);
        break;
      default:
        break;
    }
  });

  const data = {
    labels: [
      "Semantic Core Editor",
      "Curation Studio",
      "Trends UI",
      "Topic Navigator",
      "Moment Maker V3",
    ],
    datasets: [
      {
        data: [sce, cs, trends, utt, mm, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="center">
      <Bar data={data} options={options} />
    </div>
  );
};

export default OverallCoverage;

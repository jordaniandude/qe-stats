import React from "react";
import { Line } from "react-chartjs-2";
import { api } from "../utils";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
  datasets: [
    {
      label: "Semantic Core Editor",
      data: [20, 22, 23, 25, 30],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Curation Studio",
      data: [60, 63, 68, 72, 77],
      fill: false,
      backgroundColor: "rgba(54, 162, 235, 1)",
      borderColor: "rgba(54, 162, 235, 0.2)",
    },
    {
      label: "Trends UI",
      data: [20, 22, 23, 25, 30],
      fill: false,
      backgroundColor: "rgba(255, 206, 86, 1)",
      borderColor: "rgba(255, 206, 86, 0.2)",
    },
    {
      label: "Topic Navigator",
      data: [20, 22, 23, 25, 30],
      fill: false,
      backgroundColor: "rgba(75, 192, 192, 1)",
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Moment Maker V3",
      data: [20, 22, 23, 25, 30],
      fill: false,
      backgroundColor: "rgba(153, 102, 255, 1)",
      borderColor: "rgba(153, 102, 255, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "# of Tests Over Time / Per Application",
    },
  },
};

class ProgressCoverage extends React.Component {
  constructor() {
    super();
    this.state = {stats: {}};
  }
  async componentDidMount() {
    const {data: res} = await api.get("/stats");
    this.setState({stats: res});
    console.log("Getting all Stats from server: ",this.state);
  }

  render() {
    return (
      <div className="center">
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default ProgressCoverage;

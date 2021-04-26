import React from "react";
import { Line } from "react-chartjs-2";
import { api } from "../utils";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getMonths = () => {
  let labelsArray = [];
  var now = new Date();
  let count = 6;
  while (count-- > 0) {
    const monthName = months[now.getMonth()];
    labelsArray.unshift(monthName);
    now.setMonth(now.getMonth() - 1);
  }
  return labelsArray;
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
    this.state = { stats: {}, data: {} }; 
  }

  async componentDidMount() {
    const { data: res } = await api.get("/stats");
    this.setState({ stats: res });
    console.log("Getting all Stats from server: ", this.state);
    await this.prepareData();
  }
  async prepareData() {
    let dataArray = this.state.stats;
    
    // Build map of entries
    let map = {};
    console.log(dataArray);
    dataArray.forEach((entry) => {
      let month = new Date(entry["date"]).getMonth();
      console.log(month);
      if (Object.keys(map).length === 6) {
        return;
      }
      if (!map[month]) {
        // if map doesn't have this month, add it
        map[month] = entry;
      }
    });

    // Build individual app data arrays.
    let sceData = [],
      csData = [],
      trendsData = [],
      uttData = [],
      mmData = [];
    var date = new Date();
    let c = 6;
    console.log(map)
    while (c-- > 0) {
      let currentMonth = date.getMonth();
      sceData.unshift(map[currentMonth].data.sce.total);
      csData.unshift(map[currentMonth].data.cs.total);
      trendsData.unshift(map[currentMonth].data.trends.total);
      uttData.unshift(map[currentMonth].data.utt.total);
      mmData.unshift(map[currentMonth].data.mm.total);
      date.setMonth(currentMonth - 1);
    }
    this.setState({data: {
      labels: getMonths(),
      datasets: [
        {
          label: "Semantic Core Editor",
          data: sceData,
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
        {
          label: "Curation Studio",
          data: csData,
          fill: false,
          backgroundColor: "rgba(54, 162, 235, 1)",
          borderColor: "rgba(54, 162, 235, 0.2)",
        },
        {
          label: "Trends UI",
          data: trendsData,
          fill: false,
          backgroundColor: "rgba(255, 206, 86, 1)",
          borderColor: "rgba(255, 206, 86, 0.2)",
        },
        {
          label: "Topic Navigator",
          data: uttData,
          fill: false,
          backgroundColor: "rgba(75, 192, 192, 1)",
          borderColor: "rgba(75, 192, 192, 0.2)",
        },
        {
          label: "Moment Maker V3",
          data: mmData,
          fill: false,
          backgroundColor: "rgba(153, 102, 255, 1)",
          borderColor: "rgba(153, 102, 255, 0.2)",
        },
      ],
    }});
    console.log(this.state);
  }

  render() {
    return (
      <div className="center">
        <Line data={this.state.data} options={options} />
      </div>
    );
  }
}

export default ProgressCoverage;

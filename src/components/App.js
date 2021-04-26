import React from "react";
import OverallCoverage from "./OverallCoverage";
import ProgressCoverage from "./ProgressCoverage";
import Profile from "./Profile";
import TotalCoverage from "./TotalCoverage";
import { api } from "../utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {data: {}};
  }
  async componentDidMount() {
    const {data: res} = await api.get("/stats/latest");
    this.setState({data: res.data});
  }
  render() {
    return (
      <div>
        <div className="header">
          <h2>Curation Tooling Test Automation Stats <span aria-label="stats" role="img">📊</span></h2>
        </div>
        <div className="row">
          <div className="leftcolumn">
            <div className="card">
              <OverallCoverage stats={this.state.data} />
            </div>
            <div className="card">
              <ProgressCoverage />
            </div>
          </div>
          <div className="rightcolumn">
            <div className="card">
              <Profile />
            </div>
            <div className="card">
              <TotalCoverage stats={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import "./index.css";
import  React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Fragment } from "react";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Fragment>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
import HomePage from "./components/HomePage";
import Application from "./components/Application";

export default class App {
  start() {
    this.startRouter();
  }

  startRouter() {
    const history = createBrowserHistory();
    render(
      <Application name="computer-science-docs">
        <Router history={history}>
          <Routes />
        </Router>
      </Application>,
      document.getElementById("container")
    );
  }
}

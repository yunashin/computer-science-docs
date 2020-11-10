import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Routes from "./Routes";
import Application from "./components/Application";

export default class App {
  start() {
    this.startRouter();
  }

  startRouter() {
    const history = createBrowserHistory();
    render(
      <Application name="yunaversal-thoughts">
        <Router history={history}>
          <Routes />
        </Router>
      </Application>,
      document.getElementById("container")
    );
  }
}

import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
    </Switch>
  );
}

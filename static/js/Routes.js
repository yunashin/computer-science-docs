import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import { SidebarContent } from "./components/constants/SidebarContent";

export default function Routes() {
  const PageRoutes = SidebarContent.map((page) => (
    <Route key={page.title} path={page.path} component={HomePage} />
  ));

  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/sandbox" exact={true} component={HomePage} />
      {PageRoutes}
    </Switch>
  );
}

import React from "react";

import { PageRouterSettings } from "../types";

import { Redirect, Route, Switch } from "react-router-dom";

const Routes = ({ config }: { config?: PageRouterSettings }) => {
  const routes = config?.routes || {};

  const homeRoute = config?.homePage || "";

  const renderCallback = config?.render || (() => () => <div />);

  return (
    <Switch>
      {Object.keys(routes).map((route) => (
        <Route
          component={renderCallback(route)}
          key={route}
          exact
          path={routes[route]}
        />
      ))}
      <Redirect to={homeRoute} />
    </Switch>
  );
};

export default Routes;

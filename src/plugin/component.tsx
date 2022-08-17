import React from "react";

import { PageRouterSettings } from "./types";

import { MoBrixDesignerComponent } from "mobrix-designer-types";

import { Router } from "react-router-dom";
import Routes from "./components/Routes";
import { createBrowserHistory } from "history";

const AppRouter: MoBrixDesignerComponent<{ pageRouter?: PageRouterSettings }> = ({
  creatorConfig,
}) => {
  const history = creatorConfig.pageRouter?.history || createBrowserHistory();

  return (
    <Router history={history}>
      <Routes config={creatorConfig.pageRouter} />
    </Router>
  );
};

export default AppRouter;

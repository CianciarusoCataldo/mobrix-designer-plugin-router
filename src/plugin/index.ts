import { PageRouterPlugin } from "./types";

import AppRouter from "./component";
import { createMoBrixDesignerPlugin } from "mobrix-designer-tools";

const pageRouterPlugin: PageRouterPlugin = createMoBrixDesignerPlugin(
  "mobrix-designer-router",
  () => ({
    internalComponent: AppRouter,
    field: (creator) => {
      const pagesConfig = creator.pageRouter || {};

      let history = pagesConfig.history;
      let homePage = pagesConfig.homePage;
      let routes = pagesConfig.routes;

      return {
        name: "pageRouter",
        content: {
          render: pagesConfig.render,
          routes: routes,
          homePage: homePage,
          history: history,
        },
      };
    },
  })
);

export default pageRouterPlugin;

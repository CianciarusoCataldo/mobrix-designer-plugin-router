import { MoBrixDesignerPlugin } from "mobrix-designer-types";
import { History } from "history";

export type PageRouterSettings = {
  /** Custom route rendering function, to return the right component based on the given route (if not set, router won't be loaded) */
  render?: (route: string) => () => JSX.Element;
  routes?: Record<string, string>;
  homePage?: string;
  homeRoute?: string;
  history?: History;
};

export type PageRouterPlugin = MoBrixDesignerPlugin<{
  pageRouter?: PageRouterSettings;
}>;

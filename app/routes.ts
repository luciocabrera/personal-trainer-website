import type { RouteConfig } from "@react-router/dev/routes";
import { route, layout } from "@react-router/dev/routes";

export default [
  layout("layouts/main.tsx", [route("/", "routes/home.tsx")]),
] satisfies RouteConfig;

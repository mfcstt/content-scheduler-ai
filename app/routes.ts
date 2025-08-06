import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/layout.tsx", [
    index("routes/dashboard.tsx"),
    route("contents", "routes/contents.tsx"),
    route("content/new", "routes/content-new.tsx"),
    route("content/edit/:id", "routes/content-edit.tsx"),
    route("users", "routes/users.tsx"),

  ]),
] satisfies RouteConfig;
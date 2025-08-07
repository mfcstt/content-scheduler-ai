import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/layout.tsx", [
    index("routes/dashboard.tsx"),
    route("posts", "routes/posts.tsx"),
    route("post/new", "routes/post-new.tsx"),
    route("post/edit/:id", "routes/post-edit.tsx"),
    route("users", "routes/users.tsx"),

  ]),
] satisfies RouteConfig;
const routes = [
  {
    path: "/",
    element: () => import("./home").then((module) => <module.default />),
  },
  {
    path: "location/:id",
    element: () => import("./place").then((module) => <module.default />),
  },
  {
    path: "*",
    element: () => import("./notfound").then((module) => <module.default />),
  },
];
export default routes;

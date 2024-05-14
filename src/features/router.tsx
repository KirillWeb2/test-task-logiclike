import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Main = React.lazy(() => import("../pages/Main"));
const Page404 = React.lazy(() => import("../pages/Page404"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
  },
  {
    path: "*",
    Component: Page404,
  },
]);

export default router;

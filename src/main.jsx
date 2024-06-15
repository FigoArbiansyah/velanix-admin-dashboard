import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/admin.js";
import "./styles/Main.css";
import Main from "./layouts/Main.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <NotFound />,
    },
  ]?.concat(
    routes?.map((route) => {
      const Element = route?.element;
      return {
        ...route,
        element: (
          <Main>
            <Element />
          </Main>
        ),
      };
    }),
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);

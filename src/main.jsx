import React from "react";
import ReactDOM from "react-dom/client";
import DashBoard from "./pages/dashboard";
import ErrorPage from "./pages/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

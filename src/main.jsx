import React from "react";
import ReactDOM from "react-dom/client";
import DashBoard from "./pages/dashboard";

import "./App.css";
import { HashRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <DashBoard />
    </HashRouter>
  </React.StrictMode>
);

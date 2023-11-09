import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import Routes from "./Routes";

const element = document.getElementById("root");
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const targetElement = document.getElementById("root");
const root = createRoot(targetElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

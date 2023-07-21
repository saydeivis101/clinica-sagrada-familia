import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ClinicaSagradaApp } from "./ClinciaSagradaApp.jsx";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClinicaSagradaApp />
    </BrowserRouter>
  </React.StrictMode>
);

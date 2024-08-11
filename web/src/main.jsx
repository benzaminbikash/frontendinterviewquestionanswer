import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Toastcontainer from "./components/Toastcontainer.jsx";
import ContextApi from "./hooks/ContextApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextApi>
      <BrowserRouter>
        <App />
        <Toastcontainer />
      </BrowserRouter>
    </ContextApi>
  </React.StrictMode>
);

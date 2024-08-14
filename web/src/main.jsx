import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Toastcontainer from "./components/Toastcontainer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toastcontainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        theme="dark"
        hideProgressBar={true}
        transition={Zoom}
        toastClassName={() =>
          "bg-black flex px-2 py-1 text-sm h-12 rounded-md shadow-sm shadow-lime-500 "
        }
        autoClose={1300}
      />
    </BrowserRouter>
  </React.StrictMode>
);

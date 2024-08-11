import React from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Toastcontainer() {
  return (
    <ToastContainer
      theme="dark"
      hideProgressBar={true}
      transition={Zoom}
      toastClassName={() =>
        "bg-black flex px-2 py-1 text-sm h-12 rounded-md shadow-sm shadow-lime-500 "
      }
      autoClose={1300}
    />
  );
}

export default Toastcontainer;

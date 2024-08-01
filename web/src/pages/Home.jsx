import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

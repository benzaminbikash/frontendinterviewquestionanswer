import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Home() {
  const location = useLocation();
  const homepath = location.pathname;
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-56 w-full">
        <Navbar />
        {homepath == "/" ? (
          <div className="flex flex-col w-full items-center h-screen pt-40">
            <h1 className="px-2 py-1 font-bold text-2xl">
              Programming Interveiw Question & Answer Admin Panel
            </h1>
            <h1 className="px-2  font-bold text-2xl">Arrange the data here!</h1>
          </div>
        ) : (
          <div className="mt-[53px]">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

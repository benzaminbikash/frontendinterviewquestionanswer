import React, { memo, useContext } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { CONTEXT } from "../hooks/ContextApi";

function Home() {
  const location = useLocation();
  const homepath = location.pathname;
  const [user] = useContext(CONTEXT);
  console.log(user);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {homepath == "/" ? (
          <div className="flex flex-col w-full items-center h-screen pt-40">
            <h1 className="px-2 py-1 font-bold text-2xl">
              Programming Interveiw Question & Answer Admin Panel
            </h1>
            <h1 className="px-2  font-bold text-2xl">Arrange the data here!</h1>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default memo(Home);

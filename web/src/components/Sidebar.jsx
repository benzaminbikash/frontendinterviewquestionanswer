import React from "react";
import { Link } from "react-router-dom";

const sideitems = [
  {
    id: 1,
    name: "user",
    link: "/user",
  },
  {
    id: 1,
    name: "category",
    link: "/category",
  },
];

function Sidebar() {
  return (
    <div className="w-56 bg-blue-950 text-white h-screen p-2">
      <h1>SideBar</h1>
      {sideitems.map((item) => {
        return (
          <div>
            <Link to={`${item.link}`}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;

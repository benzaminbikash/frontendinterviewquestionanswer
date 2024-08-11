import React from "react";
import { Link } from "react-router-dom";

const sideitems = [
  {
    id: 1,
    name: "User",
    link: "/user",
  },
  {
    id: 1,
    name: "Category",
    link: "/category",
  },
  {
    id: 1,
    name: "Question",
    link: "/question",
  },
  {
    id: 1,
    name: "Quiz",
    link: "/quiz",
  },
];

function Sidebar() {
  return (
    <div className="w-56 bg-blue-950 text-white h-screen p-2">
      <Link to="/" className="text-2xl font-bold">
        Admin Panel
      </Link>
      {sideitems.map((item, index) => {
        return (
          <div className=" mt-2" key={index}>
            <Link to={`${item.link}`} className="text-sm font-semibold">
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;

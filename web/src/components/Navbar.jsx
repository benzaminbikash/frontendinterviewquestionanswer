import React from "react";

function Navbar() {
  return (
    <div className=" bg-blue-950 text-white w-full p-2 h-12">
      <div className="flex justify-between px-10">
        <h1></h1>
        <h1>Hello Admin!</h1>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../redux/LoginApi";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(removeToken());
    navigate("/login");
    localStorage.removeItem("token");
  };
  return (
    <div className=" bg-blue-950 text-white w-full p-2 h-12 fixed  top-0 left-0 z-10 ">
      <div className="flex justify-between px-10">
        <h1></h1>
        <h1>Hello Admin!</h1>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;

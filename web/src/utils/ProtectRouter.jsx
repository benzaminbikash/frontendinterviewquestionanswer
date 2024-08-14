import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import { addToken } from "../redux/LoginApi";

function ProtectRouter() {
  const token = useSelector((state) => state.login.token);
  const getToken = localStorage.getItem("token") || token;
  return getToken ? <Outlet /> : <Login />;
}

export default ProtectRouter;

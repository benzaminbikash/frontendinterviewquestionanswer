import React, { useContext } from "react";
import { CONTEXT } from "../hooks/ContextApi";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

function ProtectRouter() {
  const [data] = useContext(CONTEXT);
  return data != null ? <Outlet /> : <Login />;
}

export default ProtectRouter;

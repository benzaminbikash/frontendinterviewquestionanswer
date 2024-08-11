import React, { createContext, useEffect, useState } from "react";
export const CONTEXT = createContext();

function ContextApi({ children }) {
  const [data, setData] = useState("");
  const getToken = () => {
    const token = localStorage.getItem("token");
    setData(token);
  };
  useEffect(() => {
    getToken();
  }, [data]);
  return (
    <CONTEXT.Provider value={[data, setData]}>{children}</CONTEXT.Provider>
  );
}

export default ContextApi;

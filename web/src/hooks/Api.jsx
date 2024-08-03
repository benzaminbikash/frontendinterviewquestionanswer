import React, { useEffect, useState } from "react";

function ApiGet(apiurl) {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(apiurl);
    const result = await response.json();
    setData(result?.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return [data];
}

export default ApiGet;

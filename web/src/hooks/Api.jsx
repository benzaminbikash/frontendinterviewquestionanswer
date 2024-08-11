import { useEffect, useState } from "react";
import { BASEURL } from "../constants/Constant";

function ApiGet(url) {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(`${BASEURL}/${url}`);
    const result = await response.json();
    setData(result);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return [data];
}

export default ApiGet;

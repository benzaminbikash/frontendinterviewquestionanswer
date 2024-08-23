import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import { getAllCategory } from "../redux/CategoryApi";

function Question() {
  const { category, loading } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  if (loading) {
    return <Loader />;
  }
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center font-semibold my-2 text-2xl">
        Question Based On Category
      </h1>
      <div className="flex gap-10 flex-wrap px-2 ">
        {category?.data.map((item, index) => (
          <button
            className="w-32 h-32 rounded-full  items-center shadow-2xl justify-center shadow-red-300 my-2"
            key={index}
          >
            <img
              src={item.image}
              alt="randomImage"
              className="rounded-full w-full h-full object-contain"
            />
            <h1 className="text-center font-semibold mt-2">{item.title}</h1>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;

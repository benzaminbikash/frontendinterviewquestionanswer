import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import { getQuizes } from "../redux/QuizApi";

function Quiz() {
  const { quiz, loading } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getQuizes());
  }, []);

  const filterLevel = [];
  quiz.data.map((item) => {
    if (!filterLevel.includes(item.level)) {
      filterLevel.push(item.level);
    }
  });
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-2">
      <h1 className="font-extrabold text-2xl text-center">Level of Quiz</h1>
      <div className="flex flex-col items-start">
        {filterLevel.sort().map((item, index) => (
          <button
            onClick={() => navigate(`/quiz/${item}`)}
            key={index}
            className="bg-blue-900 my-2 py-3 w-full hover:bg-blue-950 rounded-md"
          >
            <p className="text-white font-semibold">{item}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../redux/QuizApi";
import QuizList from "../components/QuizList";
import Loader from "../components/Loader";

export default function QuizLevel() {
  const [selectQuiz, setSelectQuiz] = useState(null);
  const { level } = useParams();
  const { quiz, loading } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz(level));
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex justify-between  px-4 items-center mt-2 ">
        <h1 className="title">Level {level}</h1>
        <CustomButton title="Add Quiz" Clicked={() => {}} />
      </div>
      <div>
        {quiz?.data.map((item, index) => (
          <QuizList
            key={index}
            item={item}
            index={index}
            setSelectQuiz={setSelectQuiz}
            selectQuiz={selectQuiz}
            level={level}
          />
        ))}
      </div>
    </>
  );
}

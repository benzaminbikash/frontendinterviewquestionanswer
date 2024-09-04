import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../redux/QuizApi";
import QuizList from "../components/QuizList";
import Loader from "../components/Loader";
import QuizUpdateModal from "../components/QuizUpdateModal";

export default function QuizLevel() {
  const [selectQuiz, setSelectQuiz] = useState(null);
  const [show, setShow] = useState(false);
  const { level } = useParams();
  const { quiz, loading } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const [select, setSelect] = useState(null);

  useEffect(() => {
    dispatch(getQuiz(level));
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <h1 className="title text-center px-4 mt-2 ">Level {level}</h1>
      <div>
        {quiz?.data.map((item, index) => (
          <QuizList
            key={index}
            item={item}
            index={index}
            setSelectQuiz={setSelectQuiz}
            selectQuiz={selectQuiz}
            level={level}
            setShow={() => setShow(!show)}
            setSelect={setSelect}
          />
        ))}
      </div>
      {show && (
        <QuizUpdateModal setShow={() => setShow(!show)} select={select} />
      )}
    </>
  );
}

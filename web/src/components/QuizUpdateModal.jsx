import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import CustomButton from "./CustomButton";
import {
  addQuestion,
  getQuestionbyCategory,
  updateQuestion,
} from "../redux/QuestionApi";
import AnswerList from "./AnswerList";
import PointList from "./PointList";
import { addQuiz, getQuiz, getQuizes, updateQuiz } from "../redux/QuizApi";

function QuizUpdateModal({ setShow, select }) {
  const dispatch = useDispatch();
  const [level, setLevel] = useState("");
  const [question, setQuestion] = useState("");
  const [correctanswer, setCorrectAnswer] = useState();
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (select) {
      setLevel(select?.level);
      setQuestion(select?.question);
      setCorrectAnswer(select?.correctAnswer);
      setAnswers(select?.answers);
    }
  }, [select]);

  const handleInput = (e) => {
    e.preventDefault();
    if (!level || !question || !correctanswer) {
      toast("All fields are required.");
    } else {
      const data = {
        id: select._id,
        quiz: {
          level,
          question,
          answers,
          correctAnswer: correctanswer,
        },
      };
      dispatch(updateQuiz(data)).then(() => {
        dispatch(getQuizes());
        setShow();
        toast("Quiz Updated Successfully.");
      });
    }
  };
  const removeAnswers = (item) => {
    const index = answers.findIndex((itm) => itm == item);
    const newarray = [...answers];
    newarray.splice(index, 1);
    setAnswers(newarray);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-red-700 w-1/2 flex-col justify-center items-center px-4 py-4 rounded-xl text-white">
        <h1 className="font-bold text-2xl text-center mb-4">
          {" Update Quiz"}
        </h1>
        <form onSubmit={handleInput} noValidate>
          <label>Level</label>
          <input
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border rounded w-full py-1 text-sm px-3 text-black focus:outline-none focus:shadow-outline"
          />
          <label>Question</label>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border rounded w-full py-1 text-sm px-3 text-black focus:outline-none focus:shadow-outline"
          />

          <label>Answers</label>
          <div className="flex gap-2">
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="border rounded w-full py-1 text-sm px-3 text-black
            focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              className="bg-black px-2 rounded-md py-1 w-44"
              onClick={() => {
                if (!answer) {
                  toast("Answer is empty.");
                } else if (answers.length >= 3) {
                  toast("Only three answers are accepted.");
                } else {
                  setAnswers([...answers, answer]);
                  setAnswer("");
                }
              }}
            >
              Add 3 Answer
            </button>
          </div>
          {answers.map((item, index) => (
            <PointList item={item} key={index} removePoint={removeAnswers} />
          ))}
          <label>Correct Answer</label>
          <input
            value={correctanswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            className="border rounded w-full py-1 text-sm px-3 text-black focus:outline-none focus:shadow-outline"
          />

          <div className="flex justify-center gap-3 mt-5">
            <CustomButton title={"Update"} />
            <CustomButton
              title="Cancel"
              Clicked={(e) => {
                e.preventDefault();
                setShow();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuizUpdateModal;

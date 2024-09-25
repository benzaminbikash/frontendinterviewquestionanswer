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

function QuestionModal({ setShow, categoryId, selectData }) {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState("");
  const [heading, setHeading] = useState("");
  const [points, setPoints] = useState([]);
  const [point, setPoint] = useState("");
  const [coding, setCoding] = useState(``);
  const [youtubelink, setYoutubeLink] = useState("");

  const removeAnswer = (i) => {
    const index = answers.findIndex((item) => item == i);
    const newanswer = [...answers];
    newanswer.splice(index, 1);
    setAnswers(newanswer);
  };
  const removePoint = (i) => {
    const index = points.findIndex((item) => item == i);
    const newpoint = [...points];
    newpoint.splice(index, 1);
    setPoints(newpoint);
  };
  const handleInput = (e) => {
    e.preventDefault();
    if (!question) {
      toast("Question is required.");
    } else {
      const data = {
        question: question,
        answer: answers,
        points: {
          heading: heading,
          point: points,
        },
        category: categoryId,
        coding: coding,
        youtubelink: youtubelink,
      };
      dispatch(addQuestion(data));
      dispatch(getQuestionbyCategory(categoryId));
      setShow();
      toast("Question Added Successfully.");
    }
  };

  useEffect(() => {
    if (selectData) {
      setQuestion(selectData?.question);
      setAnswers(selectData?.answer);
      setHeading(selectData?.points?.heading);
      setPoints(selectData?.points?.point);
      setCoding(selectData?.coding);
      setYoutubeLink(selectData?.youtubelink);
    }
  }, [selectData]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("question", question);
    answers.forEach((ans, index) => {
      formdata.append(`answer[${index}]`, ans);
    });
    formdata.append("points.heading", heading);
    points.forEach((poi, index) => {
      formdata.append(`points.point[${index}]`, poi);
    });
    formdata.append("category", categoryId);
    formdata.append("coding", coding);
    formdata.append("youtubelink", youtubelink);
    const data = {
      id: selectData._id,
      question: formdata,
    };
    dispatch(updateQuestion(data)).then(() => {
      dispatch(getQuestionbyCategory(categoryId));
    });

    setShow();
    toast("Question Updated Successfully.");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-red-700 w-1/2 flex-col justify-center items-center px-4 py-4 rounded-xl text-white">
        <h1 className="font-bold text-2xl text-center mb-4">
          {selectData
            ? "Update Question and Answer"
            : " Add Question and Answer"}
        </h1>
        <form onSubmit={selectData ? handleUpdate : handleInput} noValidate>
          <label>Question</label>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            name="question"
            className="border rounded w-full py-1 text-sm px-3 text-black focus:outline-none focus:shadow-outline"
          />

          <label>Answers</label>
          <div className="flex gap-2">
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              name="answer"
              className="border rounded w-full py-1 text-sm px-3 text-black
            focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={() => {
                if (!answer) {
                  toast("Answer is empty.");
                } else {
                  setAnswers([...answers, answer]);
                  setAnswer("");
                }
              }}
              className="bg-black px-2 rounded-md py-1 w-32"
            >
              Add Answer
            </button>
          </div>
          {answers.map((item, index) => (
            <AnswerList
              item={item}
              index={index}
              removeAnswer={removeAnswer}
              key={index}
            />
          ))}

          <label>Point Header</label>
          <input
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            name="heading"
            className="border rounded w-full py-1 text-sm px-3 text-black focus:outline-none focus:shadow-outline"
          />

          <label>Points</label>
          <div className="flex gap-2">
            <input
              value={point}
              onChange={(e) => setPoint(e.target.value)}
              className="border rounded w-full py-1 text-sm px-3 text-black
            focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              className="bg-black px-2 rounded-md py-1 w-32"
              onClick={() => {
                if (!point) {
                  toast("Point is empty.");
                } else {
                  setPoints([...points, point]);
                  setPoint("");
                }
              }}
            >
              Add Point
            </button>
          </div>
          {points.map((item, index) => (
            <PointList item={item} key={index} removePoint={removePoint} />
          ))}
          <label>Coding</label>
          <textarea
            rows="6"
            cols="60"
            value={coding}
            onChange={(e) => setCoding(e.target.value)}
            name="coding"
            className="border rounded w-full py-1 text-sm px-3 text-black focus:outline-none focus:shadow-outline"
          />

          <label>Video Link</label>
          <input
            value={youtubelink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            name="youtubelink"
            className="border rounded w-full py-1 text-sm px-3 text-black focus:outline-none focus:shadow-outline"
          />

          <div className="flex justify-center gap-3 mt-5">
            <CustomButton title={selectData ? "UPDATE" : "Add"} />
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

export default QuestionModal;

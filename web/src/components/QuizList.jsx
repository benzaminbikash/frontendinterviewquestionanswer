import React from "react";
import { BsDot } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteQuiz, getQuiz } from "../redux/QuizApi";

function QuizList({ item, index, setSelectQuiz, selectQuiz, level }) {
  const dispatch = useDispatch();
  return (
    <div className="mt-4 px-2">
      <div className="w-full shadow-2xl bg-gray-300 p-3 mb-7">
        <div
          onClick={() => {
            if (selectQuiz == item._id) {
              setSelectQuiz(null);
            } else {
              setSelectQuiz(item._id);
            }
          }}
          className="flex items-center justify-between"
        >
          <h1 className="font-bold">
            {index + 1}. {item.question}
          </h1>
          <FaAngleDown className=" duration-200" />
        </div>
        {selectQuiz == item._id && (
          <>
            <div>
              {item?.answers.map((item, index) => (
                <div className="flex gap-1" key={index}>
                  <BsDot size={30} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <h1>Correct Answer: {item.correctAnswer}</h1>

            <div className="flex gap-3 items-center  justify-end mt-2">
              <button>
                <MdModeEdit size={20} color="black" onClick={() => {}} />
              </button>
              <button>
                <MdDelete
                  size={20}
                  color="red"
                  onClick={() => {
                    dispatch(deleteQuiz(item._id)).then(() => {
                      dispatch(getQuiz(level));
                    });
                  }}
                />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default QuizList;

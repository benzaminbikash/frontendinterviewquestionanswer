import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteQuestion, getQuestionbyCategory } from "../redux/QuestionApi";
import { toast } from "react-toastify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function QuestionList({
  item,
  select,
  onSelect,
  index,
  setShow,
  setSelectData,
  method,
}) {
  const dispatch = useDispatch();
  const langaugae = method.toLowerCase();
  return (
    <div className="mt-4">
      <div className="w-full shadow-2xl bg-gray-300 p-3 mb-7">
        <div
          onClick={() => {
            if (select == item._id) {
              onSelect(null);
            } else {
              onSelect(item._id);
            }
          }}
          className="flex justify-between cursor-pointer items-center "
        >
          <h1 className="font-bold">
            {index + 1}. {item.question}
          </h1>
          <FaAngleDown
            className={`${
              select == item._id
                ? "-rotate-180 duration-200"
                : "rotate-0 duration-200"
            }`}
          />
        </div>
        {select == item._id && (
          <div>
            {item?.answer.map((item, index) => {
              return (
                <p className="mb-1" key={index}>
                  {item}
                </p>
              );
            })}
            {/* for points */}
            <div className="">{item?.points?.heading}</div>
            {item?.points?.point.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {item?.coding && (
              <SyntaxHighlighter
                language={langaugae}
                // customStyle={{
                //   backgroundColor: "black",
                //   height: 300,
                // }}
              >
                {item?.coding}
              </SyntaxHighlighter>
            )}
            {item?.youtubelink && (
              <iframe
                width="560"
                height="315"
                src={
                  "https://www.youtube.com/embed/HBCf2qDeVGQ?si=No4TVQ1rmo_ZtLIX"
                }
                title="GeeksforGeeks"
              ></iframe>
            )}
            <div className="flex gap-3 items-center  justify-end mt-2">
              <button>
                <MdModeEdit
                  size={20}
                  color="black"
                  onClick={() => {
                    setShow();
                    setSelectData(item);
                  }}
                />
              </button>
              <button>
                <MdDelete
                  size={20}
                  color="red"
                  onClick={() => {
                    dispatch(deleteQuestion(item._id)).then(() => {
                      dispatch(getQuestionbyCategory(item.category));
                    });

                    toast("Delete Question Successfully.");
                  }}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionList;

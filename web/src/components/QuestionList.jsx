import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import test from "./test.jpg";
function QuestionList({ item, select, onSelect, index }) {
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
            <p className="my-1">{item.answer}</p>
            <img
              src={test}
              alt="randomImage"
              className="w-[300px] h-[500px] object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionList;

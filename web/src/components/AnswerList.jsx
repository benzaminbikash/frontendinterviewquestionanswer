import React from "react";
import { RxCross2 } from "react-icons/rx";

function AnswerList({ item, index, removeAnswer }) {
  return (
    <div className="my-2 flex items-center justify-between">
      <p className="text-black">
        {index + 1}. {item}
      </p>
      <RxCross2 size={20} color="black" onClick={() => removeAnswer(item)} />
    </div>
  );
}

export default AnswerList;

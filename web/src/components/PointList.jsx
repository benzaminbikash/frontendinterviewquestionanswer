import React from "react";
import { GoDotFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

function PointList({ item, removePoint }) {
  return (
    <div className="my-2 flex items-center justify-between">
      <p className="text-black flex items-center gap-1">
        <GoDotFill /> {item}
      </p>
      <RxCross2 size={20} color="black" onClick={() => removePoint(item)} />
    </div>
  );
}

export default PointList;

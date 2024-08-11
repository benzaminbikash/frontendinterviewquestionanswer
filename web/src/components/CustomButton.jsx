import React from "react";

function CustomButton({ title, Clicked }) {
  return (
    <div>
      <button
        onClick={Clicked}
        className="bg-red-500 py-1 w-32 rounded-md text-white font-bold"
      >
        {title}
      </button>
    </div>
  );
}

export default CustomButton;

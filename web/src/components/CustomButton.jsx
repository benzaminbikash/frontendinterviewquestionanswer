import React from "react";

function CustomButton({ title }) {
  return (
    <div>
      <button className="bg-red-500 py-1 w-32 rounded-md">{title}</button>
    </div>
  );
}

export default CustomButton;

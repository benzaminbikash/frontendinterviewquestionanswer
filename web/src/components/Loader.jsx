import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

function Loader() {
  return (
    <div className="w-full h-full flex mt-10 justify-center">
      <div>
        <FadeLoader color="grey" />
      </div>
    </div>
  );
}

export default Loader;

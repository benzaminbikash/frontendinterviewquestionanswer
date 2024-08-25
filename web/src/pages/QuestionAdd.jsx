import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionbyCategory } from "../redux/QuestionApi";
import QuestionList from "../components/QuestionList";
import Loader from "../components/Loader";

function QuestionAdd() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { question, loading } = useSelector((state) => state.question);
  const [selectQuestion, setSelectQuestion] = useState(null);

  useEffect(() => {
    dispatch(getQuestionbyCategory(state._id));
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="px-20">
      <h1 className="bg-blue-950 py-6 text-center font-bold text-white text-2xl">
        {state.title}
      </h1>
      <div className=" flex  mt-2 justify-between">
        <h1 className="font-semibold text-xl">Question List</h1>
        <CustomButton title={"Add Question"} />
      </div>
      <div>
        {question.data?.length > 0 ? (
          question.data?.map((item, index) => {
            return (
              <QuestionList
                key={index}
                item={item}
                select={selectQuestion}
                onSelect={setSelectQuestion}
                index={index}
              />
            );
          })
        ) : (
          <div>
            <h1 className="text-black text-center mt-4 text-4xl font-bold">
              No Questions Of {state.title} Please Add!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionAdd;

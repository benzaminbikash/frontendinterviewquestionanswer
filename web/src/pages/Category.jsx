import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../redux/CategoryApi";
import Loader from "../components/Loader";
import CategoryList from "../components/CategoryList";
import CategoryModel from "../components/CategoryModel";

export default function Category() {
  const { category, loading, error } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  if (loading) {
    return <Loader />;
  }

  const selectCategory = (item) => {
    setSelect(item);
  };

  return (
    <>
      <div className="flex justify-between  px-4 items-center mt-2 ">
        <h1 className="title">Category List</h1>
        <CustomButton
          title="Add Category"
          Clicked={() => {
            setSelect(null);
            setShow(true);
          }}
        />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-2 mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-blue-950  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                SN
              </th>

              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {category.data.map((item, index) => {
              return (
                <CategoryList
                  item={item}
                  index={index}
                  key={index}
                  selectCategory={selectCategory}
                  show={() => setShow(true)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {show && <CategoryModel setShow={() => setShow(!show)} select={select} />}
    </>
  );
}

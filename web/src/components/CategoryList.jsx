import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { MdDelete, MdModeEdit } from "react-icons/md";

import { deleteCategory, getAllCategory } from "../redux/CategoryApi";

function CategoryList({ item, index, selectCategory, show }) {
  const dispatch = useDispatch();
  const deletecategory = (id) => {
    dispatch(deleteCategory(id)).then(() => {
      dispatch(getAllCategory());
      toast("Delete Category Successfully!");
    });
  };
  return (
    <>
      <tr className="bg-blue-900">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-white whitespace-nowrap "
        >
          {index + 1}
        </th>
        <td className="px-6 py-4 text-white">{item?.title}</td>
        <td className="px-6 py-4 text-white">
          <img
            src={item?.image}
            alt="randomImage"
            style={{ width: 40, height: 40, borderRadius: 60 }}
          />
        </td>
        <td className="px-6 py-4  ">
          <div className="flex gap-3 items-center ">
            <button
              onClick={() => {
                selectCategory(item), show();
              }}
            >
              <MdModeEdit size={20} color="white" />
            </button>
            <button onClick={() => deletecategory(item._id)}>
              <MdDelete size={20} color="red" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default CategoryList;

import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteCategory, getAllCategory } from "../redux/CategoryApi";

function CategoryList({ item, index }) {
  const dispatch = useDispatch();
  const deletecategory = (id) => {
    dispatch(deleteCategory(id)).then(() => {
      dispatch(getAllCategory());
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
        <td className="px-6 py-4 text-white">{item.title}</td>
        <td className="px-6 py-4 text-white">
          <img
            src={item.image}
            alt="randomImage"
            style={{ width: 40, height: 40, borderRadius: 60 }}
          />
        </td>
        <td className="px-6 py-4  ">
          <div className="flex gap-3 items-center justify-center">
            <button>
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

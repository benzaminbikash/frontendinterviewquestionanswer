import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";

function UserList({ item, index, setShow, selectUser }) {
  return (
    <>
      <tr className="bg-blue-900">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-white whitespace-nowrap "
        >
          {index + 1}
        </th>
        <td className="px-6 py-4 text-white">{item.name}</td>
        <td className="px-6 py-4 text-white">{item.email}</td>
        <td className="px-6 py-4 text-white">{item.mobile}</td>
        <td className="px-6 py-4 text-white">{item.role}</td>

        <td className="px-6 py-4 flex gap-4 items-center ">
          <button
            onClick={() => {
              setShow(true);
              selectUser(item);
            }}
          >
            <MdModeEdit size={20} color="white" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default UserList;

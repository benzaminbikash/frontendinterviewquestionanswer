import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";

function UserList({ item, index }) {
  return (
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

      <td className="px-6 py-4 flex gap-4">
        <MdModeEdit size={20} color="white" />
        <MdDelete size={20} color="red" />
      </td>
    </tr>
  );
}

export default UserList;

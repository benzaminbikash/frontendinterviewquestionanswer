import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserList from "../components/UserList";
import { getAllUser } from "../redux/UserApi";
import CustomButton from "../components/CustomButton";

export default function User() {
  const token = localStorage.getItem("token");
  const { user, loading, error } = useSelector((item) => item.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser(token));
  }, []);

  return (
    <>
      <div className="flex justify-between  px-4 items-center mt-2 ">
        <h1 className="title">User List</h1>
        <CustomButton title="Add User" />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-2 mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-white uppercase bg-blue-950  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                SN
              </th>

              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user?.data?.map((item, index) => {
              return <UserList item={item} key={index} index={index} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

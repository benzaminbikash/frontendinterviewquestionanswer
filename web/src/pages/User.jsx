import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserList from "../components/UserList";
import { getAllUser } from "../redux/UserApi";
import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

export default function User() {
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(null);

  const { user, loading, error } = useSelector((item) => item.user);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser(token));
  }, []);

  if (loading) {
    return <Loader />;
  }
  const userSelect = (user) => {
    setSelect(user);
  };
  return (
    <>
      <div className="flex justify-between  px-4 items-center mt-2 ">
        <h1 className="title">User List</h1>
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
              return (
                <UserList
                  item={item}
                  key={index}
                  index={index}
                  setShow={setShow}
                  selectUser={userSelect}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      {show && <Modal setShow={() => setShow(!show)} select={select} />}
    </>
  );
}

import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, updateUser } from "../redux/UserApi";
import { toast } from "react-toastify";

function Modal({ setShow, select }) {
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (select) {
      setRole(select.role);
    }
  }, [select]);

  const userUpdate = async (e) => {
    const data = {
      id: select._id,
      role: role,
    };
    e.preventDefault();
    const token = localStorage.getItem("token");
    dispatch(updateUser(data)).then(() => {
      dispatch(getAllUser(token));
      setShow();
      toast("Update User Successfully");
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-red-700 w-1/2 flex-col justify-center items-center px-4 py-4 rounded-xl text-white">
        <h1 className="font-bold text-2xl text-center mb-4"> {select.name}</h1>
        <form>
          <input
            onChange={(e) => setRole(e.target.value)}
            className="border rounded w-full py-1 text-sm px-3 text-black  mb-1  focus:outline-none focus:shadow-outline"
            placeholder="User Role (admin or user )"
            value={role}
          />
          <div className="flex justify-center gap-3 mt-5">
            <CustomButton title="Update" Clicked={userUpdate} />
            <CustomButton
              title="Cancel"
              Clicked={(e) => {
                e.preventDefault();
                setShow();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;

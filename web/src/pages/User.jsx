import React from "react";
import CustomButton from "../components/CustomButton";
import { toast } from "react-toastify";

export default function User() {
  return (
    <>
      <div className="flex justify-between  px-4 items-center mt-2 ">
        <h1 className="title">User List</h1>
        <CustomButton title="Add User" />
      </div>
    </>
  );
}

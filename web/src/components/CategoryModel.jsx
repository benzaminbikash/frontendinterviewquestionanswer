import React, { useEffect } from "react";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addCategory,
  getAllCategory,
  updateCategory,
} from "../redux/CategoryApi";
import { toast } from "react-toastify";

function CategoryModel({ setShow, select }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (select) {
      setValue("title", select.title);
    }
  }, [select, setValue]);

  const handleInput = (data) => {
    const file = data.file[0];
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", file);
    dispatch(addCategory(formData));
    dispatch(getAllCategory());
    setShow();
    toast("Category Add Successfully!");
  };

  const updateInput = (value) => {
    console.log("update input");
    const file = value.file[0];
    const formData = new FormData();
    formData.append("title", value.title);
    formData.append("image", file);
    const data = {
      id: select._id,
      category: formData,
    };
    dispatch(updateCategory(data)).then(() => {
      dispatch(getAllCategory());
      setShow();
      toast("Category Update Successfully!");
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-red-700 w-1/2 flex-col justify-center items-center px-4 py-4 rounded-xl text-white">
        <h1 className="font-bold text-2xl text-center mb-4">
          {select ? "Update Category" : "Add Category"}
        </h1>
        <form
          onSubmit={handleSubmit(select ? updateInput : handleInput)}
          noValidate
        >
          <label>Title</label>
          <input
            {...register(
              "title",
              !select && {
                required: {
                  value: true,
                  message: "Title is required",
                },
              }
            )}
            className="border rounded w-full py-1 text-sm px-3 text-black focus:outline-none focus:shadow-outline"
          />
          <p className="error mt-1 text-white mb-1">{errors?.title?.message}</p>

          <label className="mt-10">Image</label>
          <input
            {...register(
              "file",
              !select && {
                required: {
                  value: true,
                  message: "File is required",
                },
              }
            )}
            type="file"
            className="border rounded w-full py-1 text-sm px-3 text-black focus:outline-none focus:shadow-outline"
          />
          <p className="error mt-1 text-white mb-1">{errors?.file?.message}</p>

          <div className="flex justify-center gap-3 mt-5">
            <CustomButton title={select ? "UPDATE" : "Add"} />
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

export default CategoryModel;

import { toast } from "react-toastify";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { BASEURL } from "../constants/Constant";
import CustomButton from "../components/CustomButton";
import ThreeDot from "../components/ThreeDot";
import { CONTEXT } from "../hooks/ContextApi";

function Login() {
  const [data, setData] = useContext(CONTEXT);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInput = async (event) => {
    const { email, password } = event;
    setLoading(true);
    const response = await fetch(`${BASEURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    setLoading(false);
    const result = await response.json();
    if (result.status == "success") {
      toast(result.message);
      localStorage.setItem("token", result.token);
      setData(result.token);
      navigate("/");
    } else {
      toast(result.message);
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  }, []);
  return (
    <div
      className="bg-cover bg-center bg-fixed "
      style={{
        backgroundImage: `url("https://wallpapercg.com/media/ts_orig/22626.webp")`,
      }}
    >
      <div className="h-screen flex justify-center items-center">
        <div className="bg-black text-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-2xl font-bold mb-8 text-center">
            Login Dashboard
          </h1>
          <form onSubmit={handleSubmit(handleInput)} noValidate>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email is not valid.",
                  },
                })}
                className="border rounded w-full py-1 text-sm px-3 text-black   focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter your email address"
              />
              <p className="error mt-1">{errors?.email?.message}</p>
            </div>

            <div className="mb-4">
              <label className="block font-semibold text-sm text-white mb-2">
                Password
              </label>
              <input
                className="border rounded w-full py-1 text-sm px-3 text-black  mb-1  focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters.",
                  },
                })}
              />
              <p className="error">{errors?.password?.message}</p>
            </div>
            <div className="mb-6 flex justify-center">
              <CustomButton title={loading ? <ThreeDot /> : "Login"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

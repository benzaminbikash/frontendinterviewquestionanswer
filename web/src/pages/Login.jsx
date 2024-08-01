import React from "react";
import CustomButton from "../components/CustomButton";

function Login() {
  return (
    <div
      className="bg-cover bg-center bg-fixed "
      style={{
        "background-image": `url("https://wallpapercg.com/media/ts_orig/22626.webp")`,
      }}
    >
      <div className="h-screen flex justify-center items-center">
        <div className="bg-black text-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-2xl font-bold mb-8 text-center">
            Login Dashboard
          </h1>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                className="border rounded w-full py-1 text-sm px-3 text-black  focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold text-sm text-white mb-2">
                Password
              </label>
              <input
                className="border rounded w-full py-1 text-sm px-3 text-black mb-3  focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6 flex justify-center">
              <CustomButton title="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

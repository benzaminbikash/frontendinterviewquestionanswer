import { configureStore } from "@reduxjs/toolkit";
import LoginApi from "./LoginApi";
import User from "./UserApi";

export const store = configureStore({
  reducer: {
    login: LoginApi,
    user: User,
  },
});

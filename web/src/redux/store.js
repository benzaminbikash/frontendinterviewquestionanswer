import { configureStore } from "@reduxjs/toolkit";
import LoginApi from "./LoginApi";
import User from "./UserApi";
import CATEGORY from "./CategoryApi";

export const store = configureStore({
  reducer: {
    login: LoginApi,
    user: User,
    category: CATEGORY,
  },
});

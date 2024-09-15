import { configureStore } from "@reduxjs/toolkit";
import { USER } from "./API/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import TOKEN from "./API/token";
import { CATEGORY } from "./API/categoryApi";
import { QUESTION } from "./API/quetionAnserapi";

export const store = configureStore({
  reducer: {
    auth: TOKEN,
    [USER.reducerPath]: USER.reducer,
    [CATEGORY.reducerPath]: CATEGORY.reducer,
    [QUESTION.reducerPath]: QUESTION.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      USER.middleware,
      CATEGORY.middleware,
      QUESTION.middleware
    ),
});

setupListeners(store.dispatch);

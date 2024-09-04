import { configureStore } from "@reduxjs/toolkit";
import { USER } from "./API/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [USER.reducerPath]: USER.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(USER.middleware),
});

setupListeners(store.dispatch);

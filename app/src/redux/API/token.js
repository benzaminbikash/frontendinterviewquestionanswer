import { createSlice } from "@reduxjs/toolkit";

export const TOKEN = createSlice({
  name: "Token",
  initialState: {
    token: null,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state, action) => {
      state.token = null;
    },
  },
});

export const { addToken, removeToken } = TOKEN.actions;

export default TOKEN.reducer;

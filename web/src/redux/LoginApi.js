import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASEURL } from "../constants/Constant";

export const LOGIN = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const LoginApi = createSlice({
  name: "login",
  initialState: {
    user: {},
    loading: false,
    error: null,
    token: "",
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state, action) => {
      state.token = "";
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LOGIN.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(LOGIN.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(LOGIN.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addToken, removeToken } = LoginApi.actions;

export default LoginApi.reducer;

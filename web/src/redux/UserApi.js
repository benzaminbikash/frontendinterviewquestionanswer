import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL } from "../constants/Constant";

export const getAllUser = createAsyncThunk(
  "user/getalluser",
  async (token, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/alluser`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("token", token);
    try {
      const result = await response.json();
      console.log("result", result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const User = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.loading = false;
      state.error = error.payload;
    });
  },
});

export default User.reducer;

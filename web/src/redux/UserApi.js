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
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (data, { rejectWithValue }) => {
    const { id, role } = data;
    console.log(role);
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASEURL}/roleupdatebyadmin/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ role }),
    });
    try {
      const result = await response.json();
      return { ...result, _id: id, role };
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
    // update user
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = state.user.data.map((item) => {
        item._id === action.payload._id ? action.payload : item;
      });
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default User.reducer;

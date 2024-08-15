import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASEURL } from "../constants/Constant";
import { json } from "react-router-dom";

export const getAllCategory = createAsyncThunk(
  "get/category",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/allcategory`);
    const result = await response.json();
    try {
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "delete/category",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/deletecategory/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    try {
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addCategory = createAsyncThunk(
  "add/category",
  async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await fetch(`${BASEURL}/addcategory`, {
      method: "POST",
      headers: {
        Accept: "multipart/form-data",
      },
      body: data,
    });
    const result = await response.json();
    try {
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const CATEGORY = createSlice({
  name: "category",
  initialState: {
    category: {
      message: "",
      status: "",
      data: [],
    },
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.category = {
        message: action.payload.message,
        status: action.payload.status,
        data: action.payload.data,
      };
    });
    builder.addCase(getAllCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // deleting
    builder.addCase(deleteCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.category.data = state.category.data.filter(
        (item) => item._id != action.payload._id
      );
      state.category.status = action.payload.status;
      state.category.message = action.payload.message;
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // add
    builder.addCase(addCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.category.data.push(action.payload.data);
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default CATEGORY.reducer;

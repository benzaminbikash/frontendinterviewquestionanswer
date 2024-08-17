import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASEURL } from "../constants/Constant";

export const getQuestions = createAsyncThunk(
  "get/question",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/questionanswer`);
    const result = await response.json();
    try {
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addQuestion = createAsyncThunk(
  "add/question",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/questionanswer`, {
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
export const getQuestionbyCategory = createAsyncThunk(
  "get/questionbycategory",
  async (category, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/questionanswer/${category}`);
    const result = await response.json();
    try {
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteQuestion = createAsyncThunk(
  "delete/question",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/questionanswer/${id}`, {
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
export const updateQuestion = createAsyncThunk(
  "update/question",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/questionanswer/${data.id}`, {
      method: "PUT",
      headers: {
        Accept: "multipart/form-data",
      },
      body: data.category,
    });
    const result = await response.json();
    try {
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const QUESTION = createSlice({
  name: "qustion",
  initialState: {
    question: {
      data: [],
      status: "",
      message: "",
    },
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {},
});

export default QUESTION.reducer;

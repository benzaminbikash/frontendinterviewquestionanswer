import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASEURL } from "../constants/Constant";

export const getQuizes = createAsyncThunk(
  "get/quizes",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/quiz`);
    const result = await response.json();
    try {
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getQuiz = createAsyncThunk(
  "get/quiz",
  async (level, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/quiz/${level}`);
    const result = await response.json();
    try {
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addQuiz = createAsyncThunk(
  "add/quiz",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/quiz`, {
      method: "POST",
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

export const updateQuiz = createAsyncThunk(
  "update/quiz",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/quiz/${data.id}`, {
      method: "PUT",
      body: data.quiz,
    });
    const result = await response.json();
    try {
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteQuiz = createAsyncThunk(
  "delete/quiz",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${BASEURL}/quiz/${id}`, {
      method: "delete",
    });
    const result = await response.json();
    try {
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const QUIZ = createSlice({
  name: "quiz",
  initialState: {
    quiz: {
      message: "",
      status: "",
      data: [],
    },
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getQuizes.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getQuizes.fulfilled, (state, action) => {
      state.loading = false;
      state.quiz = {
        message: action.payload.message,
        status: action.payload.status,
        data: action.payload.data,
      };
    });
    builder.addCase(getQuizes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // get quiz
    builder.addCase(getQuiz.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getQuiz.fulfilled, (state, action) => {
      state.loading = false;
      state.quiz.data = action.payload.data;
    });
    builder.addCase(getQuiz.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // for adding quiz
    builder.addCase(addQuiz.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addQuiz.fulfilled, (state, action) => {
      state.loading = false;
      state.quiz.data.push(action.payload.data);
    });
    builder.addCase(addQuiz.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // update quiz:
    builder.addCase(updateQuiz.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateQuiz.fulfilled, (state, action) => {
      state.loading = false;
      state.quiz.data = state.quiz.data.map((item) =>
        item._id == action.payload._id ? action.payload : item
      );
    });
    builder.addCase(updateQuiz.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // delete question answer:
    builder.addCase(deleteQuiz.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteQuiz.fulfilled, (state, action) => {
      state.loading = false;
      state.quiz.data = state.quiz.data.filter(
        (item) => item._id != action.payload._id
      );
    });
    builder.addCase(deleteQuiz.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default QUIZ.reducer;

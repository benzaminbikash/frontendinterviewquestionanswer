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
      body: data.question,
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
  name: "question",
  initialState: {
    question: {
      data: [],
      status: "",
      message: "",
    },
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    // for all question and answer
    builder.addCase(getQuestions.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.question.data = action.payload.data;
      state.question.status = action.payload.status;
      state.question.message = action.payload.message;
    });
    builder.addCase(getQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // for adding question answer
    builder.addCase(addQuestion.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.question.data.push(action.payload.data);
    });
    builder.addCase(addQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // delete question answer:
    builder.addCase(deleteQuestion.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.question.data = state.question.data.filter(
        (item) => item._id != action.payload._id
      );
    });
    builder.addCase(deleteQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // update question answer:
    builder.addCase(updateQuestion.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.question.data = state.question.data.map((item) =>
        item._id == action.payload._id ? action.payload : item
      );
    });
    builder.addCase(updateQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // question by category:
    builder.addCase(getQuestionbyCategory.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getQuestionbyCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.question.data = action.payload.data;
    });
    builder.addCase(getQuestionbyCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default QUESTION.reducer;

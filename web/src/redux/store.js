import { configureStore } from "@reduxjs/toolkit";
import LoginApi from "./LoginApi";
import User from "./UserApi";
import CATEGORY from "./CategoryApi";
import QUESTION from "./QuestionApi";
import QUIZ from "./QuizApi";

export const store = configureStore({
  reducer: {
    login: LoginApi,
    user: User,
    category: CATEGORY,
    question: QUESTION,
    quiz: QUIZ,
  },
});

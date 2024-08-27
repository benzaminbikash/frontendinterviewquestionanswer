import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Error from "./pages/NotFound";
import Question from "./pages/Question";
import Category from "./pages/Category";
import QuestionAdd from "./pages/QuestionAdd";
import ProtectRouter from "./utils/ProtectRouter";
import QuizLevel from "./pages/QuizLevel";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="" element={<ProtectRouter />}>
        <Route path="/" element={<Home />}>
          <Route path="user" element={<User />} />
          <Route path="category" element={<Category />} />
          <Route path="question" element={<Question />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="quiz/:level" element={<QuizLevel />} />
        </Route>
        <Route path="/question/:title" element={<QuestionAdd />} />
      </Route>
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

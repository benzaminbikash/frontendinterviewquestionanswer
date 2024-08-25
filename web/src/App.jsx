import React, { useEffect } from "react";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Category from "./pages/Category";
import ProtectRouter from "./utils/ProtectRouter";
import Error from "./pages/NotFound";
import Question from "./pages/Question";
import QuestionAdd from "./pages/QuestionAdd";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="" element={<ProtectRouter />}>
        <Route path="/" element={<Home />}>
          <Route path="user" element={<User />} />
          <Route path="category" element={<Category />} />
          <Route path="question/" element={<Question />} />
        </Route>
        <Route path="/question/:title" element={<QuestionAdd />} />
      </Route>
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

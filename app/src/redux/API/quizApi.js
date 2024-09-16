import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../../constants/constants";

export const QUIZ = createApi({
  reducerPath: "QUIZ",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASEURL}`,
  }),
  endpoints: (builder) => ({
    getQuized: builder.query({
      query: () => ({
        url: "/quiz",
        method: "GET",
      }),
    }),
    getQuizLevel: builder.query({
      query: (level) => ({
        url: `/quiz/${level}`,
        method: "GET",
      }),
    }),
    playQuiz: builder.mutation({
      query: (item) => ({
        url: "/playquiz",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${item.token}`,
        },
        body: item.data,
      }),
    }),
  }),
});

export const { useGetQuizedQuery, useGetQuizLevelQuery, usePlayQuizMutation } =
  QUIZ;

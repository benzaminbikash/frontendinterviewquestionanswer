import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../../constants/constants";

export const QUESTION = createApi({
  reducerPath: "QUESTION",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}` }),
  endpoints: (builder) => ({
    getQuestionAnswer: builder.query({
      query: (id) => ({
        url: `/questionanswer/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetQuestionAnswerQuery } = QUESTION;

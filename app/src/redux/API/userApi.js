import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const USER = createApi({
  reducerPath: "User",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://programminginterviewquestionandanswer.vercel.app/api/v4",
  }),
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/registration",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation } = USER;

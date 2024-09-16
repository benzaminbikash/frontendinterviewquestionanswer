import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../../constants/constants";

export const USER = createApi({
  reducerPath: "User",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASEURL}`,
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
    myData: builder.query({
      query: (token) => ({
        url: "/mydata",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation, useMyDataQuery } =
  USER;

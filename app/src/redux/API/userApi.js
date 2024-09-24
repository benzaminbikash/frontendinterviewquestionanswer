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
    sendOtp: builder.mutation({
      query: (data) => ({
        url: "/sendotp",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
    passwordRecovery: builder.mutation({
      query: (data) => ({
        url: "/passwordrecovery",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
    passwordChange: builder.mutation({
      query: (data) => ({
        url: "/passwordchange",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useMyDataQuery,
  useSendOtpMutation,
  usePasswordRecoveryMutation,
  usePasswordChangeMutation,
} = USER;

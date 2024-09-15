import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASEURL } from "../../constants/constants";

export const CATEGORY = createApi({
  reducerPath: "CATEGORY",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASEURL}` }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/allcategory",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = CATEGORY;

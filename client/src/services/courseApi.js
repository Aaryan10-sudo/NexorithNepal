// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nexorithnepal.onrender.com",
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => "/course/readall",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCoursesQuery } = courseApi;

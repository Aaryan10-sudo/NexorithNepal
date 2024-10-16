import { configureStore } from "@reduxjs/toolkit";
import { courseApi } from "../services/courseApi";

export const store = configureStore({
  reducer: {
    [courseApi.reducerPath]: courseApi.reducer, // Corrected this line
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware),
});


import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./redux/Slice/toggleSlice";
import { baseApi } from "./BaseAPi/GenericApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, // Use baseApi here
    toggle: toggleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), // Include baseApi middleware
});

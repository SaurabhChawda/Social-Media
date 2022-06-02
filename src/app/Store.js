import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/AuthSlice.js";
import userReducer from "../features/Users/UserSlice.js";
import postSlice from "../features/Posts/PostSlice.js";
export const Store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post: postSlice,
  },
});

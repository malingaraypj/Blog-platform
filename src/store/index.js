import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { newPostReducer } from "./NewPost/newPost";

export const store = configureStore({
  reducer: { auth: authReducer, newpost: newPostReducer },
});

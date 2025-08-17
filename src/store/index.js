import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { newPostReducer } from "./NewPost/newPost";
import { alertReducers } from "./alert/alertSlice";

export const store = configureStore({
  reducer: { auth: authReducer, newpost: newPostReducer, alert: alertReducers },
});

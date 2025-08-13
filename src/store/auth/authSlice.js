import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  token: null,
  logInstatus: "idle", // idle, success, loading, error
  isAuthenticated: false,
  errorMsg: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.logInstatus = "loading";
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.logInstatus = "success";
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.logInstatus = "idle";
    },
    loginFailed: (state, action) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.logInstatus = "error";
      state.errorMsg = action.payload || "login failed";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

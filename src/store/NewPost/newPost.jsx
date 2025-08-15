import { createSlice } from "@reduxjs/toolkit";

const newPostSlice = createSlice({
  name: "newPost",
  initialState: { status: "idle" },
  reducers: {
    activate: (state) => {
      state.status = "active";
    },
    deactivate: (state) => {
      state.status = "idle";
    },
  },
});

export const newPostActions = newPostSlice.actions;
export const newPostReducer = newPostSlice.reducer;

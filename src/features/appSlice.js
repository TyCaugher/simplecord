import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    app: null,
  },
  reducers: {
    selectChannelId: (state, action) => {
        export const selectChannelId = (state) => state.app.channelId;
    },
    selectChannelName: (state) => {
      state.app = channelName;
    },
  },
});

export const { login, logout } = appSlice.actions;

export const selectapp = (state) => state.app.app;

export default appSlice.reducer;
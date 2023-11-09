import { createSlice } from "@reduxjs/toolkit";

import { handleLogin, handleGetCurrentUser } from "./authAsyncActions";

const initialState = {
  isLoggedIn: false,
  userData: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.userData = payload.userData;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },

  extraReducers: (builder) => {
    // Get Current User
    builder.addCase(handleGetCurrentUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleGetCurrentUser.fulfilled, (state, { payload }) => {
      if (payload) {
        state.isLoggedIn = true;
        state.userData = payload;
        state.loading = false;
      } else {
        state.isLoggedIn = false;
        state.userData = null;
        state.loading = false;
      }
    });
    builder.addCase(handleGetCurrentUser.rejected, (state) => {
      state.loading = false;
    });

    // Login
    builder.addCase(handleLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.userData = payload;
    });

    builder.addCase(handleLogin.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

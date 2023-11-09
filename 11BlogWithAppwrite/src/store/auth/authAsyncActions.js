import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../appwrite/auth.service";

export const handleLogin = createAsyncThunk("auth/Login", async (payload) => {
  try {
    const { email, password } = payload;
    return await authService.login({ email, password });
  } catch (error) {
    console.log("async thunk error", error);
    return "error";
  }
});

export const handleGetCurrentUser = createAsyncThunk(
  "auth/GetCurrentUser",
  async () => {
    try {
      return await authService.getCurrentUser();
    } catch (error) {
      console.log("async thunk error", error);
      return "error";
    }
  }
);

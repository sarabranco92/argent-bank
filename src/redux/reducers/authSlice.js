// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailed: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
    
  },
});

export const { loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;

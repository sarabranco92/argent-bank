// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
  tokken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {


    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.tokken = action.payload;
      state.error = null;
    },
    loginFailed: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    // Define the logout reducer inside the reducers object
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;

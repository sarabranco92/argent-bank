import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice'; // Import the reducer function from authSlice
import userReducer from './reducers/userSlice'; // Assuming this is correctly importing the reducer function

const store = configureStore({
  reducer: {
    auth: authReducer, // Use the reducer function, not the entire slice
    user: userReducer,
  },
});

export default store;


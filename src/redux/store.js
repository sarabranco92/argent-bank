import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice'; // Import the reducer function from authSlice
import userReducer from './reducers/userSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer, 
    user: userReducer,
  },
});

export default store;


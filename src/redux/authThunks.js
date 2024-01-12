import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email,
        password
      });
      console.log("Token from login response:", response.data.body.token);

      sessionStorage.setItem('token', response.data.body.token);

      // In loginUser thunk
      return thunkAPI.fulfillWithValue(response.data.body); 

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);


export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (_, thunkAPI) => {
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data.body;   

     } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);




export const updateUserName = createAsyncThunk(
  'user/updateUserName',
  async ({ newUserName }, thunkAPI) => {
    try {
      const token = sessionStorage.getItem('token');
      console.log("Token for update request:", token);
      const response = await axios.put('http://localhost:3001/api/v1/user/profile',
        { userName: newUserName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json' 
          }
        }
      );
      console.log("Update response:", response.data); // Logging the response
      return { newUserName }; 
    } catch (error) {
      console.error("Update error:", error.response || error); 
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
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

            console.log('cldjgkdfn')
            
    


            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

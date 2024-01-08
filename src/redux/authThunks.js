// src/redux/authThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginSuccess, loginFailed } from './reducers/authSlice';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { dispatch }) => {
        try {
            console.log("Sending Request:", JSON.stringify({ email, password })); // Debug log
            const response = await fetch('http://mongodb://localhost/argentBankDB', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                dispatch(loginSuccess(data));
                
            } else {
                throw new Error('Login failed');
            }
        } catch (error) {
            dispatch(loginFailed(error.message));
        }
    }
);
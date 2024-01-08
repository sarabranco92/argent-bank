import { createSlice } from '@reduxjs/toolkit';

// Initial user state
const initialState = {
    status: 'VOID',
    userData: {}
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserProfile: (state, action) => {
            state.status = 'SUCCEEDED';
            state.userData = action.payload;
        },
        editUsername: (state, action) => {
            state.status = 'MODIFIED';
            state.userData.username = action.payload;
        },
        logout: () => initialState
    }
});

// Export the action creators and the reducer
export const { getUserProfile, editUsername, logout } = userSlice.actions;
export default userSlice.reducer;

        
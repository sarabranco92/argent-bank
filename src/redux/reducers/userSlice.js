import { createSlice } from '@reduxjs/toolkit';
import { updateUserName, fetchUserProfile } from '../authThunks'; // Make sure this path is correct

const initialState = {
  status: 'VOID',
  userData: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userData = action.payload;
    },
    setUsername: (state, action) => {
      if (state.userData.body) {
        state.userData.body.userName = action.payload.userName;
      } else {
        state.userData.body = { userName: action.payload.userName };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserName.fulfilled, (state, action) => {
        // Update userData with the payload
        state.userData.userName = action.payload.newUserName;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userData = action.payload;
      });
  },
});

export const { setUserProfile, setUsername } = userSlice.actions;
export default userSlice.reducer;

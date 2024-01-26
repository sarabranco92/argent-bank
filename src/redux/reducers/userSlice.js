import { createSlice } from '@reduxjs/toolkit';
import { updateUserName, fetchUserProfile } from '../authThunks';


// État initial du slice utilisateur
const initialState = {
  status: 'VOID',    // État du chargement des données utilisateur
  userData: {},      // Données de l'utilisateur
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Reducer pour définir le profil de l'utilisateur
    setUserProfile: (state, action) => {
      state.userData = action.payload; // Met à jour les données utilisateur
    },

    // Reducer pour mettre à jour le nom d'utilisateur
    setUsername: (state, action) => {
      if (state.userData.body) {
        state.userData.body.userName = action.payload.userName; // Met à jour le nom d'utilisateur
      } else {
        state.userData.body = { userName: action.payload.userName }; // Crée l'objet body si inexistant
      }
    },
  },
  extraReducers: (builder) => {
    // Gestion des actions asynchrones avec extraReducers
    builder
      .addCase(updateUserName.fulfilled, (state, action) => {
        // Mettre à jour les données utilisateur avec le nouveau nom d'utilisateur
        state.userData.userName = action.payload.newUserName;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        // Mettre à jour les données utilisateur avec les données du profil
        state.userData = action.payload;
      });
  },
});

export const { setUserProfile, setUsername } = userSlice.actions;
export default userSlice.reducer;

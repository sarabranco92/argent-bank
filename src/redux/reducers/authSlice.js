
import { createSlice } from '@reduxjs/toolkit';

// État initial du slice d'authentification
const initialState = {
  isLoggedIn: false, // Indique si l'utilisateur est connecté
  user: null,        // Informations sur l'utilisateur connecté
  error: null,       // Gestion des erreurs d'authentification
  token: null,       // Token d'authentification de l'utilisateur
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  // Reducer pour gérer le succès de la connexion
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;              // Met à jour l'état de connexion
      state.token = action.payload.token;   // Sauvegarde le token
      state.user = action.payload.user;     // Sauvegarde les infos utilisateur
      state.error = null;                   // Réinitialise les erreurs
    },
    
    // Reducer pour gérer la déconnexion
    logout: (state) => {
      state.isLoggedIn = false; // Réinitialise l'état de connexion
      state.user = null;        // Supprime les infos utilisateur
      state.error = null;       // Réinitialise les erreurs
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;

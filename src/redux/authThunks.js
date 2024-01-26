import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Création d'un thunk asynchrone pour la connexion de l'utilisateur
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
            // Envoi de la requête de connexion à l'API
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email,
        password
      });
      console.log("Token from login response:", response.data.body.token);
      // Sauvegarde du token dans le sessionStorage
      sessionStorage.setItem('token', response.data.body.token);

      // Retourne le corps de la réponse en cas de succès
      return thunkAPI.fulfillWithValue(response.data.body);

    } catch (error) {
      console.log('Error received:', error);
            // Gestion des erreurs et renvoi d'un message d'erreur
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Création d'un thunk asynchrone pour récupérer le profil de l'utilisateur
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (_, thunkAPI) => {
    try {
            // Récupération du token du sessionStorage
      const token = sessionStorage.getItem('token');

            // Envoi de la requête pour obtenir le profil utilisateur
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Retourne les données du profil utilisateur
      return response.data.body;

    } catch (error) {
            // Gestion des erreurs et renvoi d'un message d'erreur
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);




export const updateUserName = createAsyncThunk(
  'user/updateUserName',
  async ({ newUserName }, thunkAPI) => {
    try {
      // Récupération du token du sessionStorage
      const token = sessionStorage.getItem('token');
      console.log("Token for update request:", token);
      // Envoi de la requête de mise à jour du nom d'utilisateur
      const response = await axios.put('http://localhost:3001/api/v1/user/profile',
        { userName: newUserName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("Update response:", response.data);
      // Retourne le nouveau nom d'utilisateur
      return { newUserName };
    } catch (error) {
      console.error("Update error:", error.response || error);

      // Gestion des erreurs et renvoi d'un message d'erreur
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
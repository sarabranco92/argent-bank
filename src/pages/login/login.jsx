
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../redux/authThunks';
import { loginSuccess } from '../../redux/reducers/authSlice';
import { fetchUserProfile } from '../../redux/authThunks';
import { setUserProfile } from '../../redux/reducers/userSlice';

import "../login/_login.scss";
import "../../assets/_main.scss";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Initialisation de la fonction dispatch pour envoyer des actions au store Redux
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault(); // Empêcher le comportement par défaut du formulaire
        setErrorMessage(''); // Réinitialiser le message d'erreur

        try {
            const rememberMe = document.getElementById('remember-me').checked;
            console.log("Remember Me Checked:", rememberMe);

            // Appel du thunk loginUser pour effectuer la connexion
            const response = await dispatch(loginUser({ email, password })).unwrap();

            // Sauvegarder le token dans le localStorage si 'Se souvenir de moi' est coché
            if (rememberMe) {
                localStorage.setItem('userToken', response.token);
            }

            // Dispatcher l'action de succès de connexion
            dispatch(loginSuccess({
                token: response.token,
                user: {}
            }));

            // Récupérer le profil utilisateur après une connexion réussie
            dispatch(fetchUserProfile(response.token)).then((action) => {
                if (action.type === 'user/fetchUserProfile/fulfilled') {
                    // Mettre à jour le profil utilisateur dans le store Redux
                    dispatch(setUserProfile(action.payload));
                }
            });
        } catch (error) {
            // Gérer les erreurs et afficher un message d'erreur
            setErrorMessage(error.message || 'Failed to login. Please try again.');
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;


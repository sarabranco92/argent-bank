
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

    const dispatch = useDispatch();


const handleLogin = async (e) => {
    e.preventDefault();
    
    const rememberMe = document.getElementById('remember-me').checked;
    console.log("Remember Me Checked:", rememberMe);

    const response = await dispatch(loginUser({ email, password })).unwrap();
    dispatch(loginSuccess({
      token: response.token,
      user: {} 
    }));
    

// Save the token to local storage if 'Remember Me' is checked
if (rememberMe) {
    localStorage.setItem('userToken', response.token);
}

    // Fetch the user profile after successful login
    dispatch(fetchUserProfile(response.token)).then((action) => {
      if (action.type === 'user/fetchUserProfile/fulfilled') {
        dispatch(setUserProfile(action.payload));
      }
    });
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
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;


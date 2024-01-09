import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../redux/authThunks';
import { loginSuccess } from '../../redux/reducers/authSlice';

import "../login/_login.scss";
import "../../assets/_main.scss";

function Login ()  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

   

    const handleLogin = async (e) => {
        e.preventDefault();
console.log('cenas')
    
            const response = await dispatch(loginUser({ email, password })).unwrap();
            // Dispatch loginSuccess avec les données de réponse
            console.log(response.body.token)
            dispatch(loginSuccess({ tokken: response.body.token, user: response.user }));
            
        
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


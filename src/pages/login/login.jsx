import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../../redux/authThunks';

import "../login/_login.scss";
import "../../assets/_main.scss";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginStatus = useSelector((state) => state.auth.isLoggedIn); // Assuming 'isLoggedIn' is in your auth state


    const handleLogin = (e) => {
        
        e.preventDefault(); // Prevent default form submission
        dispatch(loginUser({ email, password }));
        
    };
    
    useEffect(() => {
        if (loginStatus) {
            navigate('/user'); 
        }
    }, [loginStatus, navigate]);

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


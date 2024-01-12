
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { loginSuccess } from './redux/reducers/authSlice';


import HomePage from './pages/home/home';
import Login from './pages/login/login';
import User from './pages/user/user';
import Error from './pages/error/error';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import "../src/assets/_main.scss";

function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            dispatch(loginSuccess({ token }));
        }
    }, [dispatch]);


    return (
        <div className="app-container">
            <NavBar />
            
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={isLoggedIn ? <Navigate to="/user" /> : <Login />} />
                <Route path="/user" element={isLoggedIn ? <User /> : <Navigate to="/login" />} />
                <Route path="*" element={<Error />} />
                

                </Routes>
           
            <Footer />
        </div>
    );
}

export default App;


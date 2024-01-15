
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { loginSuccess } from './redux/reducers/authSlice';
import { fetchUserProfile } from './redux/authThunks'; // import the action to fetch user data


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
            // Dispatch an action to fetch user profile data
            dispatch(fetchUserProfile(token))
                .then(action => {
                    if (action.type.endsWith('fulfilled')) {
                        dispatch(loginSuccess({ token, user: action.payload }));
                    }
                });
        }
    }, [dispatch]);

    return (
        <div className="app-container">
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={isLoggedIn ? <Navigate to="/user" /> : <Login />} />
                    <Route path="/user" element={isLoggedIn ? <User /> : <Navigate to="/login" />} />
                     <Route path="*" element={<Error />} />
                </Routes>
           </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;


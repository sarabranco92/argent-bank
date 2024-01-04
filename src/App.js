import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from './pages/home/home';
import Login from './pages/login/login';
import UserProfile from './pages/UserProfile/UserProfile';

import "../src/assets/_main.scss";

function App() {
    const isConnected = useSelector((state) => state.auth.isConnected);
    return (
        
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={isConnected ? <UserProfile /> : <Navigate to= "/login" />} />
            </Routes>
    );
}

export default App;


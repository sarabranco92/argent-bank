import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from './pages/home/home';
import Login from './pages/login/login';
import UserProfile from './pages/UserProfile/UserProfile';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import "../src/assets/_main.scss";

function App() {
    const isConnected = useSelector((state) => state.auth.isConnected);
    return (
        <div className="app-container">
            <NavBar />
            
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={isConnected ? <UserProfile /> : <Navigate to="/login" />} />
                </Routes>
           
            <Footer />
        </div>
    );
}

export default App;


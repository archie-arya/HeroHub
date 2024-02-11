// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Onboarding from './components/Onboarding';
import LandingPage from './LandingPage';
import "./App.css"
import Main from './main';

const App = () => {
    return (
        <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/home" element={<LandingPage/>} />
                    {/* Add other routes as needed */}
                </Routes>
        </Router>
    );
};

export default App;

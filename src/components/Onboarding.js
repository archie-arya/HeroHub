// Onboarding.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Onboarding = ({ imageSrc, mainText }) => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        // Navigate to /home when Get Started button is clicked
        navigate('/home');
    };

    return (
        <div className={`onboarding-container dark-mode`}>
            <div className='face-card'>
                <img src={process.env.PUBLIC_URL + imageSrc} alt="Service" />
            </div>
            <div className='main-text-container'>
                <h2 className='main-text'>{mainText}</h2>
            </div>
            <button className='start-btn' onClick={handleGetStarted}>
                <h3 className='start'>Get Started</h3>
            </button>
        </div>
    );
};

export default Onboarding;

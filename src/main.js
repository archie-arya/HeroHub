// main.js

import React, { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding';
import './App.css';

const Main = () => {
    const onboardingData = [
        { imageSrc: '/plumber.jpg', mainText: 'Need a Plumber?' },
        { imageSrc: '/parlour.png', mainText: 'Visit our Parlour!' },
        { imageSrc: '/cleaning.png', mainText: 'Home Cleaning Services' },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000); // Change service every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % onboardingData.length);
    };

    return (
        <Onboarding
            imageSrc={onboardingData[currentSlide].imageSrc}
            mainText={onboardingData[currentSlide].mainText}
        />
    );
};

export default Main;

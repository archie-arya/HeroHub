import React from 'react';
import "../App.css";


const Navbar = () => {
    return (

        <div className={'navbar-container dark-mode'}>
            <div className='logo-container'>
                <img className="logo-image"src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo" />
                <h4 className='logo-text'>HeroHub</h4>
            </div>
            <div className='frame-one'>
                <h2 className='home'>Home</h2>
                <h2 className='services'>Request</h2>
                <h2 className='notif'>Notifications</h2>
                <h2 className='chat'>Chat</h2>
            </div>
            <div className='frame-two'>
                <h2 className='about-us'>About Us</h2>
                <h2 className='contact'>Contact</h2>
            </div>
        </div>

    );
};

export default Navbar;
import React from 'react';
import "./App.css";
import { serviceData } from './data/mockupData';

const Offer = ({ service }) => {
  return (
    <div className='offer'>
      <h3> Offer on {service.name}</h3>
      <h1> Get {service.offer} % discount </h1>
      <button className='grab'>Grab NOW</button>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className={'landing-page-container dark-mode'}>
      <div className='top-container'>
        <div className='greeting'>
          <h2 className='hello-text'>Hello Archie</h2>
          <h1 className='question-text'>What are you looking for today?</h1>
        </div>
        <div className='search'>
          <input type="text" placeholder="Search..." className="search-bar" />
          <img src={process.env.PUBLIC_URL + '/search.png'} alt="Search icon" className='search-icon' />
        </div>
      </div>
      <div className='offer-container'>
        {serviceData.map((service) => (
          <Offer key={service.id} service={service} />
        ))}
      </div>
      <div className='services'>
        <h1>Services</h1>
      </div>
    </div>
  );
};

export default LandingPage;

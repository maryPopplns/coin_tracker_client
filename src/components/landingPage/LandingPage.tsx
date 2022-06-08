import './landingPage.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import bitcoin from './assets/Bitcoin.png';
import ethereum from './assets/Ethereum.png';
import dashboard from './assets/Dashboard.png';
import brandIcon from './assets/Brand-icon.png';

// TODO change top calculations when dashboard-wrapper size is complete

function LandingPage(): JSX.Element {
  return (
    <main className='landing-page'>
      <header>
        <Link to='/'>
          <img className='brand-icon' src={brandIcon} alt='brand icon' />
        </Link>
        <div>
          <Link to='/signup'>sign up</Link>
          <Link to='/login'>login</Link>
        </div>
      </header>
      <h1 className='landing-page-heading'>Coin Tracker</h1>
      <p className='landing-page-description'>
        State of the art technologies to track your defi portfolio
      </p>
      <div className='dashboard-wrapper'>
        <div className='dashboard-container'>
          <img
            className='dashboard-icon'
            src={dashboard}
            alt='dashboard icon'
          />
          <img className='bitcoin-icon coin' src={bitcoin} alt='bitcoin icon' />
          <img
            className='ethereum-icon coin'
            src={ethereum}
            alt='ethereum icon'
          />
        </div>
        {/* <button className='sign-up-button'>Sign Up</button> */}
      </div>
    </main>
  );
}

export default LandingPage;

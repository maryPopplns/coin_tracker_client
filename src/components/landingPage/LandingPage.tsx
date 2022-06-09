import './landingPage.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPageNavbar from '../landingPageNavbar/LandingPageNavbar';

import bitcoin from './assets/Bitcoin.png';
import ethereum from './assets/Ethereum.png';
import dashboard from './assets/Dashboard.png';

// TODO change the css selector for signup anchor tag (showing incorrectly on gh)
// TODO create module for navbar

function LandingPage(): JSX.Element {
  return (
    <main className='landing-page'>
      <LandingPageNavbar />
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

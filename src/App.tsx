import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Signup from './components/signup/Signup';

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <>
      {!isLoggedIn && (
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      )}
      {/* {isLoggedIn && <Dashboard />} */}
    </>
  );
}

export default App;

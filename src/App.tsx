import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <>
      {!isLoggedIn && (
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      )}
      {/* {isLoggedIn && <Dashboard />} */}
    </>
  );
}

export default App;

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LandingPageNavbar from '../components/landingPageNavbar/LandingPageNavbar';

const renderLandingPageNavbar = () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<LandingPageNavbar />}></Route>
      </Routes>
    </MemoryRouter>
  );
};

describe('Navbar', () => {
  test('contains navbar', () => {
    renderLandingPageNavbar();
    const brandIcon = screen.getByAltText('brand icon');
    expect(brandIcon).toBeInTheDocument();
    const signUp = screen.getByRole('link', { name: 'sign up' });
    expect(signUp).toBeInTheDocument();
    const login = screen.getByRole('link', { name: 'login' });
    expect(login).toBeInTheDocument();
  });
});

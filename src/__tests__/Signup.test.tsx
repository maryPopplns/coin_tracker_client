import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Signup from '../components/signup/Signup';
import LandingPageNavbar from '../components/landingPageNavbar/LandingPageNavbar';

const renderSignupPage = () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<LandingPageNavbar />}></Route>
        <Route path='signup' element={<Signup />} />
      </Routes>
    </MemoryRouter>
  );
  const signupLink = screen.getByRole('link', { name: 'sign up' });
  userEvent.click(signupLink);
};

describe('signup form', () => {
  test('container signup form', () => {
    renderSignupPage();
    // header
    const signupHeader = screen.getByRole('heading', { name: 'Sign Up' });
    expect(signupHeader).toBeInTheDocument();
    // username
    const usernameLabel = screen.getByLabelText('username');
    expect(usernameLabel).toBeInTheDocument();
    const usernameInput = screen.getByRole('textbox', {
      name: 'username',
    });
    expect(usernameInput).toBeInTheDocument();
    // password
    const passwordLabel = screen.getByLabelText('password');
    expect(passwordLabel).toBeInTheDocument();
    const passwordInput = screen.getByRole('textbox', {
      name: 'password',
    });
    expect(passwordInput).toBeInTheDocument();
    // submit button
    const submitButton = screen.getByRole('button', { name: 'submit' });
    expect(submitButton).toBeInTheDocument();
  });

  test('username/password inputs displays text', () => {
    renderSignupPage();

    // username
    const usernameInput = screen.getByRole('textbox', {
      name: 'username',
    });
    userEvent.type(usernameInput, 'test');
    expect(usernameInput).toHaveValue('test');
    // password
    const passwordInput = screen.getByRole('textbox', {
      name: 'password',
    });
    userEvent.type(passwordInput, 'test');
    expect(passwordInput).toHaveValue('test');
  });
});

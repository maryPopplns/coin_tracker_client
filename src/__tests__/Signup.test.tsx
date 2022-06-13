import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

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
  const loginSuccessResponse = rest.post(
    'https://cryptosolutions.herokuapp.com/register',
    (req, res, ctx) => {
      // parse req.body
      const { username, password } = req.body
        .split('&')
        .reduce((object, input) => {
          const [key, value] = input.split('=');
          object[key] = value;
          return object;
        }, {});

      const isCorrectUser = username === 'spencer';
      const isCorrectPassword = password === 'password';
      const isAuthenticated = isCorrectUser && isCorrectPassword;

      if (isAuthenticated) {
        return res(ctx.status(201));
      } else {
        return res(ctx.status(401));
      }
    }
  );

  const server = new setupServer(loginSuccessResponse);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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

  // test('successful form submission routes to login page', () => {
  //   // TODO creaate test once login page is complete
  //   renderSignupPage();
  // });

  test('form submission error renders visual que', async () => {
    renderSignupPage();

    // username
    const usernameInput = screen.getByRole('textbox', {
      name: 'username',
    });
    userEvent.type(usernameInput, 'test');
    // password
    const passwordInput = screen.getByRole('textbox', {
      name: 'password',
    });
    userEvent.type(passwordInput, 'test');
    //
    const submitButton = screen.getByRole('button', { name: 'submit' });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).toHaveClass('singup-error');
    });
    await waitFor(
      () => {
        expect(submitButton).not.toHaveClass('singup-error');
      },
      { timeout: 5000 }
    );
  });
});

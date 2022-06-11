import './signup.css';
import LandingPageNavbar from '../landingPageNavbar/LandingPageNavbar';
import { useState } from 'react';

function Signup(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function formHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const data = new URLSearchParams(
      Object.entries({ username, password })
    ).toString();

    const response = await fetch(
      'https://cryptosolutions.herokuapp.com/register',
      {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const toJSON = await response.json();
    console.log(toJSON);
  }

  return (
    <main className='signup-page'>
      <LandingPageNavbar />
      <div className='signup-form-container'>
        <form className='signup-form' onSubmit={formHandler}>
          <h2>Sign Up</h2>
          <div className='signup-input-container'>
            <label htmlFor='signup-username'>username</label>
            <input
              onChange={({ target }) => setUsername(target.value)}
              value={username}
              type='text'
              name='signup-username'
              id='signup-username'
            ></input>
          </div>
          <div className='signup-input-container'>
            <label htmlFor='signup-password'>password</label>
            <input
              onChange={({ target }) => setPassword(target.value)}
              value={password}
              type='text'
              name='signup-password'
              id='signup-password'
            ></input>
          </div>
          {/* TODO create spinner for when submit had been clicked */}
          <button>submit</button>
        </form>
      </div>
    </main>
  );
}

export default Signup;

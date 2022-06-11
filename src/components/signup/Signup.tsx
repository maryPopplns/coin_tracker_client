import './signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPageNavbar from '../landingPageNavbar/LandingPageNavbar';

function Signup(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const navigate = useNavigate();

  function formHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    setIsLoading(true);

    const data = new URLSearchParams(
      Object.entries({ username, password })
    ).toString();

    fetch('https://cryptosolutions.herokuapp.com/register', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.status === 'success') {
          return navigate('/login');
        } else {
          setIsError(true);
          setTimeout(() => {
            setIsLoading(false);
            setIsError(false);
          }, 3000);
        }
      });
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
          <button
            className={`signup-submit-button${isError ? ' singup-error' : ''}`}
            disabled={isLoading}
          >
            submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default Signup;

import './signup.css';
import LandingPageNavbar from '../landingPageNavbar/LandingPageNavbar';

function Signup(): JSX.Element {
  return (
    <main className='signup-page'>
      <LandingPageNavbar />
      <form className='signup-form'>
        <h2>Sign Up</h2>
        <div>
          <label htmlFor='signup-username'>username</label>
          <input
            type='text'
            name='signup-username'
            id='signup-username'
          ></input>
        </div>
        <div>
          <label htmlFor='signup-password'>password</label>
          <input
            type='text'
            name='signup-password'
            id='signup-password'
          ></input>
        </div>
      </form>
    </main>
  );
}

export default Signup;

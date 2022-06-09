import './landingPageNavbar.css';
import { Link } from 'react-router-dom';

import brandIcon from './assets/Brand-icon.png';

function LandingPageNavbar(): JSX.Element {
  return (
    <header>
      <Link to='/'>
        <img className='brand-icon' src={brandIcon} alt='brand icon' />
      </Link>
      <div>
        <Link className='signup-link' to='/signup'>
          sign up
        </Link>
        <Link to='/login'>login</Link>
      </div>
    </header>
  );
}

export default LandingPageNavbar;

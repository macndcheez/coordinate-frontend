import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import './LandingPage.css'; // Import your CSS file for styling

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='landing-page'>
      <div className='card'>
        <h2>{showLogin ? '' : ' '}</h2>
        {showLogin ? <Login /> : <Signup />}
        <p>
          {showLogin ? "Haven't signed up?" : 'Already have an account?'}
          <span className='link' onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? 'Sign up here!' : 'Log in here!'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

const signup = () => {
  return (
    <div className='auth-container'>
        <div>
        </div>
        <form>
        <h2>Sign Up</h2> <br />
            <div className='form-group'>
                <input type='email' id='signup-email' placeholder='Enter your email address' required />
            </div>
            <div className='form-group'>
                <input type='text' id='full-name' placeholder='Enter your full name' required />
            </div>
            <div className='form-group'>
                <input type='text' id='user-name' placeholder='Enter your username' required />
            </div>
            <div className='form-group'>
                <input type='password' id='signup-password' placeholder='Enter your password' required />
            </div>
            <div className='form-group'>
                <input type='password' id='signup-confirm-password' placeholder='Confirm your password'required />
            </div>
            <button type='submit'>Sign Up</button>
            <div>
                <p>
                    already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </form>
      
    </div>
  );
};

export default signup

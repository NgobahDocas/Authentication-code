import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css'; 

const Login = () => {
  return (
    <div className="auth-container">
    
      <form>
        <h2>Login</h2>
        <div className="form-group">
          <input type="email" id="login-email" placeholder="Enter your email address" required />
        </div>
        <div className="form-group">
          <input type="text" id="full-name" placeholder="Enter your Full Name" required />
        </div>
        <div className="form-group">
          <input type="text" id="user-name" placeholder="Enter Username" required />
        </div>
        <div className="form-group">
          <input type="password" id="login-password" placeholder="Enter Password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="forgot-password">
        Forgot your password? <Link to="/forgot-password">Recover it here</Link>
      </p>
      <p>
        Do not have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;

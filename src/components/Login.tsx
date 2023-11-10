import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';


export default function Login(){
   
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
  
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
  
      // Basic validations
      if (!username.trim()) {
        setError('Username cannot be empty');
        return;
      }
  
      if (!password.trim()) {
        setError('Password cannot be empty');
        return;
      }
  
      // Check if username and password are correct for demo purposes
      if (username === 'admin' && password === 'password') {
        // Successful login, navigate to home page
        navigate(`/home/${username}`);
      } else {
        // Invalid username or password
        setError('Invalid username or password');
      }
    };
  
    return (
      <div>
        <div className='SignUpForm'>
          <h3 className='signIn'>Sign In</h3>
          <div className='innerContainer1'>
          {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError(null); // Clear error when typing
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null); // Clear error when typing
                  }}
                  
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  
   


  }
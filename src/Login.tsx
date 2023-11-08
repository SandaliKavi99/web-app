import React from 'react'
import './css/login.css';
export default function Login() {
  return (

   <div>
      <div className='SignUpForm'>
        <h3 className='signIn'>Sign In</h3>
              <div className='innerContainer1'>

              <form>
                        
                        <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                        </div>
                        <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
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
   


  )}
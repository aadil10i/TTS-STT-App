import { useState } from 'react'
import '../styles/login.css'

function Login() {
    return (
      <div className="login-container">
        <div className="card-front">
          <div className="center-wrap">
            <h4 className="mb-4 pb-3">Log In</h4>
            <form id="login-form">
              <div className="form-group">
                <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                <i className="input-icon uil uil-at"></i>
              </div>
  
              <div className="form-group mt-2">
                <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                <i className="input-icon uil uil-lock-alt"></i>
              </div>
              <a href="#" className="btn mt-4">submit</a>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default Login

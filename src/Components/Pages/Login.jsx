import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Login.css"

const Login = () => {
  return (
    <>
      <div class="modal-content login-modal">
        <h2>Login</h2>
        <form id="login-form" class="login-form" action="/" name="register-form">
          <label>Username Or Email Address*</label> <br />
          <input type="text" name="username" id="username" required />
          <label>Password*</label> <br />
          <input type="password" name="password" id="password" required />
          <div class="check-part">
            <p><input type="checkbox" name="website" id="website" />&nbsp;Remember Me</p>
            <Link to="#" class="lost-pass">Forgot Password</Link>
          </div>
          <div class="loginbtn-part">
            <button class="loginbtn lrBtn" type="submit">Log In</button>
          </div>
        </form>
        <h4>Don't Have an Account?</h4>
        <Link to="#" class="register-Btn lr-cBtn">Create Your Seller Account</Link>
      </div>
    </>
  )
}

export default Login
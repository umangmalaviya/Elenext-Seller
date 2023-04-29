import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Login.css"

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailOrMobile === "" || password === "") {
      setError("Email/Mobile and password are required");
    } else {
      // TODO: Perform login validation here
      // If login is successful, redirect to another page
      // If login fails, set error message
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrMobile);
      const isMobile = /^\d{10}$/.test(emailOrMobile);
      if (isEmail || isMobile) {
        // Redirect to another page
        window.location.href = "/OtpFill";
      } else {
        setError("Please enter a valid email or mobile number");
      }
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmailOrMobile(value);
    setError("");
  };
  return (
    <>
      <div className="modal-content login-modal">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Username Or Email Address*</label> <br />
          <input type="text" value={emailOrMobile} onChange={handleInputChange} />
          <label>Password*</label> <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="check-part">
            <p><input type="checkbox" name="website" id="website" />&nbsp;Remember Me</p>
            <Link to="#" className="lost-pass">Forgot Password</Link>
          </div>
          <div className="loginbtn-part">
            <button className="loginbtn lrBtn" type="submit">Log In</button>
          </div>
          {error && <div>{error}</div>}
        </form>
        <h4>Don't Have an Account?</h4>
        <Link to="#" className="register-Btn lr-cBtn">Create Your Seller Account</Link>
      </div>
    </>
  )
}

export default Login
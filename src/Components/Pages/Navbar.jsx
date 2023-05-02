import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/logo.svg"
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-LIGHT bg-LIGHT" aria-label="Eighth navbar example">
          <div class="container-fluid">
            <Link class="navbar-brand" to="index.html"><img src={logo} alt="logo" /></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07">
              <ul class="navbar-nav navpadle text-center">
                <li class="nav-item navspace">
                  <Link class="nav-link active" to="/">How it Process</Link>
                </li>
                <li class="nav-item navspace">
                  <Link class="nav-link" to="#">Pricing & Commission</Link>
                </li>
                <li class="nav-item navspace">
                  <Link class="nav-link" to="#">Grow Business</Link>
                </li>
              </ul>
              <div className="login-option">
                <Link to="#" className="customicon login_btn">Log In</Link>
                <Link className="customicon signup_btn" to="/wishlist">Start Selling</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
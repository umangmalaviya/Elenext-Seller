import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/logo.svg"
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-LIGHT bg-LIGHT" aria-label="Eighth navbar example">
          <div className="container-fluid">
            <Link className="navbar-brand" to="index.html"><img src={logo} alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav navpadle text-center">
                <li className="nav-item navspace">
                  <Link className="nav-link active" to="/">How it Process</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#">Pricing & Commission</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#">Grow Business</Link>
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
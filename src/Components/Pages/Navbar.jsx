import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/logo.svg"
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <header>
        <div className="middle-header">
          <div className="container-fluid">
            <div className="middle-header-inn">
              <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
              <div className="login-option">
                <Link to="#" className="customicon login_btn">Log In</Link>
                <Link className="customicon signup_btn" to="/wishlist">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Footer.css"
import logo from "../Images/logo.svg"
import insta from "../Images/insta.svg"
import facebook from "../Images/facebook.svg"
import youtube from "../Images/youtube.svg"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container-fluid'>
          <div className='footer-cnt'>
            <div className='footer-info'>
              <img src={logo} alt="logo" />
              <p>Sell your products to crores of customers on
                Elenext at 0% commission</p>
              <Link className="customicon signup_btn" to="/wishlist">Start Selling</Link>
            </div>
            <ul>
              <li>
                <h3>Sell on Elenext</h3>
                <Link to="#">Sell Online</Link>
                <Link to="#">Pricing & Commission</Link>
                <Link to="#">How it Process</Link>
                <Link to="#">Shipping & Returns</Link>
                <Link to="#">Grow Your Business</Link>
                <Link to="#">Learning Hub</Link>
                <Link to="#">Elenext Ads</Link>
                <Link to="#">Shop Online on Elenext</Link>
              </li>
              <li>
                <h3>Contact Us</h3>
                <p>sell@elenext.com</p>
                <div className='social_platform'>
                  <img src={insta} alt="insta" />
                  <img src={facebook} alt="facebook" />
                  <img src={youtube} alt="youtube" />
                </div>
              </li>
            </ul>
          </div>
          <h4>© 2015-22 Elenext Inc. All Rights Reserved.</h4>
        </div>
      </footer>
    </>
  )
}

export default Footer
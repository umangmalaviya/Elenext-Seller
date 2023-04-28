import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Footer.css"
import logo from "../Images/f-logo.svg"
import cards from "../Images/payment-method.svg"

const Footer = () => {
  return (
    <>
      <div className="top_footer">
        <div className="sub_footer">
          <div className="sub_f_header">
            Get 20% Off Discount Coupon
          </div>
          <div className="sub_f_body">
            By Subscribe Our Newslatter
          </div>
          <div className="buttonIn">
            <input placeholder='Email address' className='f_textbox' type="email" id="enter" />
            <button className='f_btn' id="clear">Subscribe</button>
          </div>
        </div>
      </div>

      <footer>
        <div className='container-fluid'>
          <div className='logo-part'>
            <img src={logo} alt="logo" />
          </div>
          <div className='footer-links'>
            <ul>
              <li>
                <h3>ABOUT</h3>
                <Link to="/contact">Contact Us</Link>
                <Link to="/about">About Us</Link>
                <Link to="#">Careers</Link>
                <Link to="#">Elemnext Stories</Link>
                <Link to="#">Press</Link>
                <Link to="#">Elemnext Wholesale</Link>
                <Link to="#">Corporate Information</Link>
              </li>
              <li>
                <h3>HELP</h3>
                <Link to="#">Payments</Link>
                <Link to="#">Shipping</Link>
                <Link to="#">Cancellation & Returns</Link>
                <Link to="#">FAQ</Link>
                <Link to="#">Report Infringement</Link>
              </li>
              <li>
                <h3>CONSUMER POLICY</h3>
                <Link to="#">Return Policy</Link>
                <Link to="#">Terms Of Use</Link>
                <Link to="#">Security</Link>
                <Link to="#">Privacy</Link>
                <Link to="#">Sitemap</Link>
                <Link to="#">Grievance Redressal</Link>
                <Link to="#">EPR Compliance</Link>
              </li>
              <li>
                <h4>Registered Office Address:</h4>
                <p>Elemnext Internet Private Limited,
                  Buildings Alyssa, Begonia &
                  Clove Embassy Tech Village,
                  Outer Ring Road, Devarabeesanahalli Village,
                  Bengaluru, 560103,
                  Karnataka, India</p>
                <p>CIN : U51109KA2012PTC066107</p>
                <p>Telephone: 044-45614700</p>
              </li>
            </ul>
          </div>
          <div className='policy-part'>
            <p>©2022 Elenext All rights reserved</p>
            <img src={cards} alt="payment-method" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/OtpFill.css"

const OtpFill = () => {
    return (
        <>
            <div className='otp_part'>
                <h2>Verify mobile number</h2>
                <p>A text with a One Time Password (OTP) has been sent to your mobile number:
                    <br /><b>7665502989</b> <Link to="#">Change</Link> </p>
                <div className='resend_ot'>
                    <h3>Enter OTP*</h3>
                    <Link to="#">Resend OTP</Link>
                </div>
                <input type="number" name="otp" id="otp" required />
                <button className="register-Btn">Create Your Seller Account</button>
                <h4>By creating an account you agree to Amazon's <Link to="#">Conditions of Use & Sale.</Link> Please see our <Link to="#">Privacy Notice,</Link> our <Link to="#">Cookies Notice</Link> and our <Link to="#">Interest-Based Ads Notice.</Link></h4>
            </div>
        </>
    )
}

export default OtpFill
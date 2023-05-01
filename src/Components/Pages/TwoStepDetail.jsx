import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/TwoStepV.css"

const TwoStepDetail = () => {
    return (
        <>
            <div className='twostepdetail'>
                <div className='container-fluid'>
                    <h2>Two-Step Verification</h2>
                    <h3>Two-Step Verification</h3>
                    <p>Enable two-factor authentication with password and OTP verification</p>
                    <h3>Why do I need this?</h3>
                    <p>Using the same password for multiple sites puts you at risk for password theft. By enabling Two-Step Verification on your Elenext account, you can ensure that your account remains secure even if your password is compromised.</p>
                    <h3>How does it work?</h3>
                    <p>After activating Two-Step Verification, the process of signing in will undergo some changes.</p>
                    <ul>
                        <li>To sign in to your account, start by entering your password as usual.</li>
                        <li>You will then receive an OTP via a text message, email, or authenticator app.</li>
                        <li>Finally, enter the OTP on the screen to complete the sign-in process and access your account.</li>
                    </ul>
                    <img src={require("../Images/twostepdetail.png")} alt="twostepdetail" />
                    <p>If you use a particular computer regularly, you can opt to bypass the OTP challenge.</p>
                    <h3>What do I need to get started?</h3>
                    <p>To use Two-Step Verification, you will require a phone capable of receiving text messages, and we will guide you through the process of setting up an authenticator app on your smartphone.</p>
                    <p>Click on "Get Started" to initiate the process of enabling Two-Step Verification for your account.</p>
                    <Link to="#" className="started_btn">Get Started</Link>
                </div>
            </div>
        </>
    )
}

export default TwoStepDetail
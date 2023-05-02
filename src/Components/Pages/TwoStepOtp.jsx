import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "../Styles/TwoStepOtp.css"
import Footer from "./Footer";
import Navbar from "./Navbar";

function TwoStepOtp() {
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [showMobileBox, setShowMobileBox] = useState(true);
    const [showOtpBox, setShowOtpBox] = useState(false);
    const [mobileError, setMobileError] = useState("");

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleMobileSubmit = (e) => {
        e.preventDefault();
        const isValid = /^[6-9]\d{9}$/.test(mobileNumber);
        if (!isValid) {
            setShowMobileBox(true);
            setShowOtpBox(false);
            setMobileError("Please enter a valid mobile number.");
        } else {
            setShowOtpBox(true);
            setShowMobileBox(false);
        }
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Handle OTP verification logic here
    };

    return (
        <>
            <Navbar />
            <div>
                {showMobileBox && (<>
                    <div className="twostepotp_first twostepotp_cnt">
                        <div className="container-fluid">
                            <h4>Step 1 to 2</h4>
                            <div className="twostepotp_inn twostepotp_first_inn">
                                <h3>Phone Number</h3>
                                <p>Please specify the mobile number that you wish to use as your authenticator. Once you attempt to log in, a single-use password will be sent via text message to this number for authentication purposes. This additional security measure helps to safeguard your account against unauthorized access. Thank you.</p>
                                <form onSubmit={handleMobileSubmit}>
                                    <label>
                                        Enter Your Mobile Number <br />
                                        <input type="tel" value={mobileNumber} onChange={handleMobileNumberChange} />
                                    </label> <br />
                                    {mobileError && <div className="error">{mobileError}</div>}
                                    <button type="submit">Continue</button>
                                </form>
                                <h5>Message and data rates may apply.</h5>
                            </div>
                        </div>
                    </div>
                </>
                )}
                {showOtpBox && (
                    <>
                        <div className="twostepotp_second twostepotp_cnt">
                            <div className="container-fluid">
                                <h4>Step 2 to 2</h4>
                                <div className="twostepotp_sec_inn twostepotp_inn">
                                    <h3>Phone Number</h3>
                                    <div className="change-phn">
                                        <p>+919785597455</p>
                                        <Link to="#"> Change</Link>
                                    </div>
                                    <p>'We've sent a One Time Password (OTP) to your phone number. Please enter it below.' similar short paragraph with more option</p>
                                    <form onSubmit={handleOtpSubmit}>
                                        <label>
                                            Enter OTP <br />
                                            <input type="text" value={otp} onChange={handleOtpChange} />
                                        </label>
                                        <br />
                                        <Link className="r-otp" href="#">Resend OTP</Link>
                                        <button className="save-btn" type="submit">Continue</button> <br />
                                    </form>
                                    <h5>Message and data rates may apply.</h5>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}

export default TwoStepOtp;
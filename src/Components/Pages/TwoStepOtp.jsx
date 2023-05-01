import React, { useState } from "react";

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
        <div>
            {showMobileBox && (<>
                <h4>Step 1 to 2</h4>
                <div className="twostepotp_first">
                    
                </div>
                <form onSubmit={handleMobileSubmit}>
                    <label>
                        Mobile Number:
                        <input type="tel" value={mobileNumber} onChange={handleMobileNumberChange} />
                    </label>
                    {mobileError && <div>{mobileError}</div>}
                    <button type="submit">Submit</button>
                </form>
            </>
            )}
            {showOtpBox && (
                <>
                    <h4>Step 2 to 2</h4>
                    <form onSubmit={handleOtpSubmit}>
                        <label>
                            OTP:
                            <input type="text" value={otp} onChange={handleOtpChange} />
                        </label>
                        <button type="submit">Verify OTP</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default TwoStepOtp;
import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import "../Styles/LandingPage.css"

const LandingPage = () => {
    const [mobileNumber, setMobileNumber] = useState("");
    const [mobileError, setMobileError] = useState("");
    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };
    const handleMobileSubmit = (e) => {
        e.preventDefault();
        const isValid = /^[6-9]\d{9}$/.test(mobileNumber);
        if (!mobileNumber) {
            setMobileError("Please enter mobile number ");
        } else if (!isValid) {
            setMobileError("Please enter a valid mobile number.");
        }
        else {
            window.location.href = '/login';
        }
    };
    return (
        <>
            {/* hero-section */}
            <section className='hero_section'>
                <div className='container-fluid'>
                    <div className='hero_inn'>
                        <div className='hero_cnt'>
                            <h1>Sell online to 14 Cr+ customers at <br /><span>0% Commission</span></h1>
                            <p>Become a Elenext seller and grow your business across India</p>
                            <form onSubmit={handleMobileSubmit}>
                                <input type="tel" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Enter Your Mobile Number" />
                                {mobileError && <div className="error">{mobileError}</div>}
                                <button type="submit">Start Selling</button>
                            </form>
                        </div>
                        <div className='hero_img'>
                            <img src={require("../Images/hero-img.png")} alt="hero img" />
                        </div>
                    </div>
                </div>
            </section>
            {/* hero-section */}

            {/* achievment_section */}
            <section className='achievment_section'>
                <div className='container-fluid'>
                    <div className='achievment_inn'>
                        <div className='achievment_cnt'>
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* achievment_section */}
        </>
    )
}

export default LandingPage
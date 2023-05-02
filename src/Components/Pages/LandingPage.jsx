import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../Styles/LandingPage.css"
import RightArrow from "../Images/right-arrow.svg"

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
                            <h2>11 Lakh+</h2>
                            <h4>Trust Elenext to sell online</h4>
                        </div>
                        <div className='achievment_cnt'>
                            <h2>14 Crore+</h2>
                            <h4>Customers buying across India</h4>
                        </div>
                        <div className='achievment_cnt'>
                            <h2>28000+</h2>
                            <h4>Pincode Supported for delivery</h4>
                        </div>
                        <div className='achievment_cnt'>
                            <h2>700+</h2>
                            <h4>Categories to sell online</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/* achievment_section */}

            {/* process-section */}
            <section className='process_section'>
                <div className='container-fluid'>
                    <h2>How it Process ?</h2>
                    <div className='process_inn'>
                        <div className='process_cnt'>
                            <div className='process_info'>
                                <img src={require('../Images/introduction-selling.png')} alt="" />
                                <h3>Introduction to Selling on Elenext</h3>
                                <p>Make your products available to crores of customers & businesses 24x7</p>
                                <Link to="#">See More <img src={RightArrow} alt="right arrow" /></Link>
                            </div>
                        </div>
                        <div className='process_cnt'>
                            <div className='process_info'>
                                <img src={require('../Images/introduction-selling.png')} alt="" />
                                <h3>Seller fee & Pricing</h3>
                                <p>Learn about the dashboard to create your seller account and manage your business</p>
                                <Link to="#">See More <img src={RightArrow} alt="right arrow" /></Link>
                            </div>
                        </div>
                        <div className='process_cnt'>
                            <div className='process_info'>
                                <img src={require('../Images/introduction-selling.png')} alt="" />
                                <h3>Why Elenext looks at suppliers ?</h3>
                                <p>All the benefits that come with selling on Elenext are designed to help you sell more, and make it easier to grow your business.</p>
                                <Link to="#">See More <img src={RightArrow} alt="right arrow" /></Link>
                            </div>
                        </div>
                        <div className='process_cnt'>
                            <div className='process_info'>
                                <img src={require('../Images/introduction-selling.png')} alt="" />
                                <h3>Refer & earn rewards</h3>
                                <p>Refer new sellers on Elenext.in & earn minimum rewards worth INR 2,000. Your friend earns a minimum reward worth INR 500, once they launch as a seller</p>
                                <Link to="#">See More <img src={RightArrow} alt="right arrow" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* process-section */}
        </>
    )
}

export default LandingPage
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../Styles/LandingPage.css"
import RightArrow from "../Images/right-arrow.svg"
import Navbar from './Navbar';
import Footer from './Footer';
import RewardImg1 from '../Images/reward-img1.svg'
import RewardImg2 from '../Images/reward-img2.svg'
import RewardImg3 from '../Images/reward-img3.svg'
import RewardImg4 from '../Images/reward-img4.svg'
import logo from "../Images/logo.svg"
import play from "../Images/play.svg"
import EmailLogo from "../Images/email.svg"

const LandingPage = () => {
    const [showMore, setShowMore] = useState(false);

    const handleSeeMore = () => {
        setShowMore(true);
    };

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
            <Navbar />
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
                            {/* <div className='process_info'> */}
                            <img src={require('../Images/introduction-selling.png')} alt="" className='process_img' />
                            <h3>Introduction to Selling on Elenext</h3>
                            <p>Make your products available to crores of customers & businesses 24x7</p>
                            <Link to="#" className='seemore_btn'>See More <img src={RightArrow} alt="right arrow" /></Link>
                            {/* </div> */}
                        </div>
                        <div className='process_cnt'>
                            {/* <div className='process_info'> */}
                            <img src={require('../Images/fee-pricing.png')} alt="" className='process_img' />
                            <h3>Seller fee & Pricing</h3>
                            <p>Learn about the dashboard to create your seller account and manage your business</p>
                            <Link to="#" className='seemore_btn'>See More <img src={RightArrow} alt="right arrow" /></Link>
                            {/* </div> */}
                        </div>
                        <div className='process_cnt'>
                            {/* <div className='process_info'> */}
                            <img src={require('../Images/looks-suppliers .png')} alt="" className='process_img' />
                            <h3>Why Elenext looks at suppliers ?</h3>
                            <p>All the benefits that come with selling on Elenext are designed to help you sell more, and make it easier to grow your business.</p>
                            <Link to="#" className='seemore_btn'>See More <img src={RightArrow} alt="right arrow" /></Link>
                            {/* </div> */}
                        </div>
                        <div className='process_cnt'>
                            {/* <div className='process_info'> */}
                            <img src={require('../Images/refer-earn.png')} alt="" className='process_img' />
                            <h3>Refer & earn rewards</h3>
                            <p>Refer new sellers on Elenext.in & earn minimum rewards worth INR 2,000. Your friend earns a minimum reward worth INR 500, once they launch as a seller</p>
                            <Link to="#" className='seemore_btn'>See More <img src={RightArrow} alt="right arrow" /></Link>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* process-section */}

            {/* reward-section */}
            <section className='reward_sec'>
                <div className='reward_inn'>
                    <div className='reward_cnt'>
                        <h2>Exclusive Supplier+ Rewards for the first 30 days</h2>
                    </div>
                    <div className='reward_info'>
                        <div className='reward_info_fir reward_info_cnt'>
                            <div className='reward_info_box'>
                                <img src={RewardImg1} alt="reward img" />
                                <h3>Free catalog visibility of ₹1200</h3>
                                <p>Run advertisements for your catalogs to increase the visibility of your products and get more orders</p>
                            </div>
                            <div className='reward_info_box'>
                                <img src={RewardImg2} alt="reward img" />
                                <h3>Free Return Shipping</h3>
                                <p>Send out your orders stress-free with zero fees on return shipping for the first month</p>
                            </div>
                        </div>
                        <div className='reward_info_sec reward_info_cnt'>
                            <div className='reward_info_box'>
                                <img src={RewardImg3} alt="reward img" />
                                <h3>Dedicated Catalog Manager</h3>
                                <p>Clear all your cataloging doubts like how to upload catalogs, correct quality check errors and more</p>
                            </div>
                            <div className='reward_info_box'>
                                <img src={RewardImg4} alt="reward img" />
                                <h3>No Order Cancellation Charges</h3>
                                <p>Cancel orders that you can’t fulfil for unforeseen reasons without worrying about penalties</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* reward-section */}

            {/* learning_hub */}
            <section className='learning_hub'>
                <div className='container-fluid'>
                    <div className='learning_inn'>
                        <div className='learning_cnt'>
                            <img src={logo} alt="logo" />
                            <h2>Learn how to sell and grow your business on Elenext</h2>
                        </div>
                        <Link to="#" className='learning_hub_btn'><img src={play} alt="play" />Visit Learning Hub</Link>
                    </div>
                </div>
            </section>
            {/* learning_hub */}

            {/* growth-section */}
            <section className='reward_sec growth_sec'>
                <div className='reward_inn'>
                    <div className='reward_cnt'>
                        <h2>Enhance Your Business Growth Through Elenext</h2>
                    </div>
                    <div className='reward_info'>
                        <div className='reward_info_fir reward_info_cnt'>
                            <div className='reward_info_box'>
                                <img src={require('../Images/growth-img1.png')} alt="reward img" />
                                <h3>Lowest Shipping Costs</h3>
                                <p>Sell your products across India to over 28,000+ pincodes at lowest delivery cost.</p>
                            </div>
                            <div className='reward_info_box'>
                                <img src={require('../Images/growth-img2.png')} alt="reward img" />
                                <h3>Next Day Dispatch Program</h3>
                                <p>Sign up for the quick Next Day Dispatch (NDD) Program and get higher visibility.</p>
                            </div>
                        </div>
                        <div className='reward_info_sec reward_info_cnt'>
                            <div className='reward_info_box'>
                                <img src={require('../Images/growth-img3.png')} alt="reward img" />
                                <h3>Ads to grow more</h3>
                                <p>Use selling tools like to be more visible and sell more products</p>
                            </div>
                            <div className='reward_info_box'>
                                <img src={require('../Images/growth-img4.png')} alt="reward img" />
                                <h3>Business Insights</h3>
                                <p>Use product & price recommendations so that you’re always on top of your business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* growth-section */}

            {/* category-section */}
            <section className='category_sec'>
                <div className='container-fluid'>
                    <h2>Popular Categories to Sell Online</h2>
                    <div className='category_inn'>
                        <p>Sell Sarees Online</p>
                        <p>Sell Jewellery Online</p>
                        <p>Sell Tshirts Online</p>
                        <p>Sell Shirts Online</p>
                        <p>Sell Watches Online</p>
                        <p>Sell Electronics Online</p>
                        <p>Sell Clothes Online</p>
                        <p>Sell Socks Online</p>
                        {showMore && (
                            <div className='category_inn'>
                                <p>Sell Sarees Online</p>
                                <p>Sell Jewellery Online</p>
                                <p>Sell Tshirts Online</p>
                                <p>Sell Shirts Online</p>
                                <p>Sell Watches Online</p>
                                <p>Sell Electronics Online</p>
                                <p>Sell Clothes Online</p>
                                <p>Sell Socks Online</p>
                            </div>
                        )}
                    </div>
                    {!showMore && (
                        <div className='viewmore_part'><button onClick={handleSeeMore} className="viewmore_btn">View More</button></div>
                    )}
                </div>
            </section>
            {/* category-section */}

            {/* support-section */}
            <section className='support_sec'>
                <div className='container-fluid'>
                    <div className='support_inn'>
                        <h2>Elenext Supplier Support Available 24/7</h2>
                        <div className='support_info'>
                            <p>Elenext supplier support is available to solve all your doubts and issues before and after
                                you start your online selling business.</p>
                            <div className='support_cnt'>
                                <img src={EmailLogo} alt="email logo" />
                                <h4>You can reach out to <span>sell@elenext.com</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* support-section */}

            <Footer />
        </>
    )
}

export default LandingPage
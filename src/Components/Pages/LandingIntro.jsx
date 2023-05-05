import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import IntroImg1 from "../Images/intro-img1.svg"
import IntroImg2 from "../Images/intro-img2.svg"
import IntroImg3 from "../Images/intro-img3.svg"
import IntroImg4 from "../Images/intro-img4.svg"
import "../Styles/LandingIntro.css"

const LandingIntro = () => {
    return (
        <>
            <Navbar />

            <div className='intro_sec'>
                <div className='container-fluid'>
                    <h2>Intro</h2>
                    <h3>Welcome to selling on Elenext</h3>
                    <p>Elenext.in is India's most visited online shopping marketplace in India and more customers than ever rely on Elenext.in for online shopping. With orders from over 100% serviceable pin-codes in India, Elenext.in has become the online destination for small and medium sized enterprises.</p>
                    <div className='intro_cnt'>
                        <div className='intro_cnt_info'>
                            <img src={IntroImg1} alt="intro img" />
                            <h4>Crores of people buy from Elenext.in</h4>
                        </div>
                        <div className='intro_cnt_info'>
                            <img src={IntroImg2} alt="intro img" />
                            <h4>Crores of people buy from Elenext.in</h4>
                        </div>
                        <div className='intro_cnt_info'>
                            <img src={IntroImg3} alt="intro img" />
                            <h4>Crores of people buy from Elenext.in</h4>
                        </div>
                        <div className='intro_cnt_info'>
                            <img src={IntroImg4} alt="intro img" />
                            <h4>Crores of people buy from Elenext.in</h4>
                        </div>
                    </div>
                    <h3>How to Register and Launch your Business</h3>
                    <ul>
                        <li>Click here to begin registration</li>
                        <li>If your phone number is linked to a customer account, use the email & password to <b>Sign In</b></li>
                        <li>If not, choose <b>'Create a new account on Elenext.in'</b></li>
                        <li>Enter the legal <b>company name</b> provided in your GST</li>
                        <li>Verify your <b>mobile number</b> through OTP</li>
                        <li>Provide your <b>store name, product and your business address</b></li>
                        <li>Enter your tax details, including your <b>GST and PAN number</b></li>
                        <li>Select the <b>'Products to sell'</b> option from the dashboard and click <b>'Start Listing'</b></li>
                        <li>Enter your <b>product name or barcode number</b> to search for it on the existing catalog of Elenext.in</li>
                        <li>If you can't find your product in the existing catalog, choose <b>'I'm adding a product not sold on Aamzon' to create a new listing</b></li>
                        <li>Enter your <b>product price, MRP, product quality, condition and your shipping option</b></li>
                        <li>Click <b>'Save and Finish'</b> to add the product to your inventory</li>
                        <li>Go to your selling dashboard, add any <b>remaining details</b>, and upload your <b>digital signature</b></li>
                        <li>Click on <b>'Launch your business'</b></li>
                    </ul>
                    <h5>Congratulations! You're now a seller on Elenext.in.</h5>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default LandingIntro
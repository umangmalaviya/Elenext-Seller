import React from 'react'
import BenefitImg from "../Images/Benefit-img.svg"

const LandingBanefit = () => {
    return (
        <>
            <div className='banefits_sec'>
                <div className='container-fluid'>
                    <h2>Benefits</h2>
                    <h3>Brand New Marketplace By Flipkart</h3>
                    <div className='banefits_cnt'>
                        <div className='banefits_info'>
                            <img src={BenefitImg} alt="benefit img" />
                            <h4>0% Commission platform</h4>
                            <p>This will be applicable to verticals listed only on Shopsy</p>
                        </div>
                        <div className='banefits_info'>
                            <img src={BenefitImg} alt="benefit img" />
                            <h4>Easy product listings</h4>
                            <p>Image guidelines are relaxed and easy to follow. Sellers can upload tabletop and hanger images clicked with mobile phones.</p>
                        </div>
                        <div className='banefits_info'>
                            <img src={BenefitImg} alt="benefit img" />
                            <h4>No brand regulations</h4>
                            <p>No trademark registration required to sell your own brand.</p>
                        </div>
                        <div className='banefits_info'>
                            <img src={BenefitImg} alt="benefit img" />
                            <h4>Enhanced reach to millions of customers</h4>
                            <p>You capture a huge amount of budget-friendly consumers through resellers. These resellers reach the consumer base through their social media channels.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingBanefit
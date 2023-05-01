import React from 'react'
import "../Styles/ShowFillDetails.css"

const ShowFillDetails = () => {
    return (
        <div className='register'>
            <div className="container-fluid">
                <div className="accordion" id="accordionExample">
                    <p className='inner-rands'>Show Fill Details</p>
                    <div className="outer-accordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <img src={require('../Images/check.png')} alt=" " />
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Shipping Fee Details
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Easy Ship charges *40 for local, 51 for regional and ₹72 for national shipping for standard size items less than 500 gms.</p>
                                    <p style={{ color: "#1C6DC1" }}>Learn more about Amazon's shipping charges</p>

                                    <span className='set-shipping'>
                                        <p>Set shipping fee you want to charge your customers</p>
                                        <strong>!</strong>
                                    </span>

                                    <div className="inner-shopping-details">
                                        <div>
                                            <input type="radio" value="Male" name="gender" /> Offer free Shipping<br />
                                            <input type="radio" value="Female" name="gender" /> Set Fee
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <img src={require('../Images/check.png')} alt=" " />
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Back Account Details
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <img src={require('../Images/check.png')} alt=" " />
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Enter Tex Details
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <img src={require('../Images/check.png')} alt=" " />
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Verify Tex Details
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <img src={require('../Images/check.png')} alt=" " />
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    GST Default Tex Code
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowFillDetails
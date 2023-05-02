import React, { useState } from 'react'
import "../Styles/ShowFillDetails.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from './Navbar';
import Footer from './Footer';

const ShowFillDetails = () => {

    const [checkbox3Checked, setCheckbox3Checked] = useState(false);

    const handleCheckbox3Change = () => {
        setCheckbox3Checked(!checkbox3Checked);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar />
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
                                                <div className="qwe">
                                                    <input type="radio" value="Male" name="gender" />
                                                    <div className="outer-offer-free">
                                                        <p className='offer-free'>Offer Free Shipping</p>
                                                        <p className='free-shipping'>Free shipping will be highlighted on your offer</p>
                                                    </div>
                                                </div>
                                                <div className="qwe">
                                                    <input type="radio" value="Female" name="gender" />
                                                    <div className="outer-offer-free">
                                                        <p className='offer-free'>Set Fee</p>
                                                        <div className="local">
                                                            <div className="per-rate">
                                                                <p>Local</p>
                                                                <input type="text" />
                                                                <span>Per Order</span>
                                                            </div>
                                                            <div className="per-rate">
                                                                <p>Regional</p>
                                                                <input type="text" />
                                                                <span>Per Order</span>
                                                            </div>
                                                            <div className="per-rate">
                                                                <p>National</p>
                                                                <input type="text" />
                                                                <span>Per Order</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                        <p className='to-verify-your'>To verify your GSTIN details, a One Time Password (OTP) will be sent to mobile number and email address of the primary GSTIN holder. Please complete the below verification to proceed. OTP will be valid only for 30 minutes.</p>
                                        <div className="both-side-part">
                                            <div className="left-side-part">
                                                <div className="account-text">
                                                    <p>Account holder Name</p>
                                                    <input type="text" />
                                                </div>
                                                <div className="account-text">
                                                    <p>Account Number</p>
                                                    <input type="text" />
                                                </div>
                                                <div className="ifsc-flex">
                                                    <p>Do You Have IFSC code ?</p>
                                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                                    <label for="html">Yes</label><br />
                                                    <input type="radio" id="css" name="fav_language" value="CSS" />
                                                    <label for="css">No</label><br></br>
                                                </div>
                                                <div className="ifsc-flex">
                                                    <p style={{ background: "#00BA00", padding: "0px 5px", color: "white", borderRadius: "50%" }}>&#x2713;</p> <p>verify you IFSC code success </p>
                                                </div>
                                            </div>
                                            <div className="right-side-part">
                                                <div className="account-text">
                                                    <p>Account Type</p>
                                                    <input type="text" />
                                                </div>
                                                <div className="account-text">
                                                    <p>Re enter account Name</p>
                                                    <input type="text" />
                                                </div>
                                                <div className="account-text">
                                                    <p>Upload signature</p>
                                                    <input id="file-upload" type="file" />
                                                </div>
                                            </div>
                                        </div>
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
                                        <p className='to-verify-your'>Update your tex details for SURAT:</p>

                                        <input type="radio" id="html" name="fav_language" value="I have GSTIN number" checked={checkbox3Checked} onChange={handleCheckbox3Change} />
                                        <label for="html" className='i-have-gst'>I have GSTIN number</label>

                                        {checkbox3Checked && (
                                            <div className="both-side-part">
                                                <div className="left-side-part">
                                                    <div className="account-text">
                                                        <p>Seller legal name</p>
                                                        <input type="text" />
                                                    </div>
                                                    <div className="account-text">
                                                        <p>Pan number</p>
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                                <div className="right-side-part">
                                                    <div className="account-text">
                                                        <p>GST Number</p>
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div style={{ display: "flex", gap: "5px", margin: "10px 0" }}>
                                            <input type="checkbox" />
                                            <p className='i-want-to-only'>I want to only sell in gst exempt category like books</p>
                                        </div>
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
                                        <p className='to-verify-your'>To verify your GSTIN details, a One Time Password (OTP) will be sent to mobile number and email address of the primary GSTIN holder. Please complete the below verification to proceed. OTP will be valid only for 30 minutes.</p>
                                        <Button className='generate-otp' onClick={handleShow}>
                                            Generate OTP
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Body>
                                                <div className="main-input-otp">
                                                    <input type="text" placeholder='Please Enter Your OTP ' />
                                                    <button>Verify OTP</button>
                                                    <div className="ifsc-flex">
                                                        <p style={{ background: "#00BA00", padding: "0px 5px", color: "white", borderRadius: "50%" }}>&#x2713;</p> <p style={{ color: "#979797" }}>Verify your Bank Account </p>
                                                        <p style={{ color: "#1E30D9", cursor: "pointer" }}>Resend</p>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                        </Modal>
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
                                        <p className='to-verify-your'>PTC (Product Tax code) are codes which are mapped to GST rates notified by the government (i.e. the percentage of taxes which are applicable for the sale of products or services). Seller Central Account tax calculation system uses PTC to calculate the tax on the products or services a seller lists on the marketplace. This is the Tax amount which sellers will later have to remit to the GST authorities on the product or services sold/provided by them</p>
                                        <h5 style={{ margin: "10px 0" }}>Default product Tex code</h5>
                                        <select name="cars" id="cars">
                                            <option disabled value="volvo">Select Product Tax Code</option>
                                            <option value="saab">GST.0</option>
                                            <option value="opel">GST.3</option>
                                            <option value="audi">GST.5</option>
                                            <option value="audi">GST.12</option>
                                            <option value="audi">GST.18</option>
                                            <option value="audi">GST.28</option>
                                        </select><br />
                                        <button className='save'>Save</button>
                                    </div>
                                </div>
                            </div>
                            <div className="none-div">
                                <button className='syb'>Start Your Business</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShowFillDetails
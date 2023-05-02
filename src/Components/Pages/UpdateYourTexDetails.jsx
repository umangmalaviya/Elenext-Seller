import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../Styles/UpdateYourTexDetails.css"
import Footer from './Footer';
import Navbar from './Navbar';

const UpdateYourTexDetails = () => {
    const [checkbox3Checked, setCheckbox3Checked] = useState(false);
    const [checkbox4Checked, setCheckbox4Checked] = useState(false);
    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);

    const handleCheckbox3Change = () => {
        setCheckbox3Checked(!checkbox3Checked);
        setCheckbox4Checked(false);
    };

    const handleCheckbox4Change = () => {
        setCheckbox4Checked(!checkbox4Checked);
        setCheckbox3Checked(false);
    };

    const handleCheckbox1Change = () => {
        setCheckbox1Checked(!checkbox1Checked);
        setCheckbox2Checked(false);
    };
    const handleCheckbox2Change = () => {
        setCheckbox2Checked(!checkbox2Checked);
        setCheckbox1Checked(false);
    };

    return (
        <>
            <Navbar />
            <div className='register'>
                <div className="container-fluid">
                    <p className='inner-rands'>Update your Tex details</p>
                    <div className='bankacc_fill'>
                        <label className='label'>
                            <p className='i-have'>
                                <input type="radio" checked={checkbox3Checked} onChange={handleCheckbox3Change} />
                                I have GSTIN number
                            </p>
                            {checkbox3Checked && (
                                <>
                                    <p className='company-bussiness'>Enter Your Tex Details</p>
                                    <input type="text" className='input-type-text' required />

                                    <p className='company-bussiness'>Seller Legal Name</p>
                                    <input type="text" className='input-type-text' required />

                                    <p className='company-bussiness'>GSTIN Number</p>
                                    <div className="flex-inside1">
                                        <input type="text" className='input-type-text' required />

                                        <div className="flex-inside">
                                            <input type="checkbox" />
                                            <p className='i-want-to'>i want to only sell in gst exempt category like books</p>
                                        </div>
                                    </div>

                                    <div className="bg-color">
                                        <p className='gst-ex'>GST Exempt products</p>
                                        <p className='if-you-dont'>If you don't have GST certificate, as per GST laws, you can only sell items like books which are exempted from GST. In future, if you want to start selling any taxable goods, you will need to register & provide GST number to Elenext. Please refer to https://cbic- gst.gov.in/gst-goods-services-rates.html to identify items that are exempted from GST, or reach out to your Tax Consultant or CA.</p>
                                    </div>

                                    <p className='company-bussiness'>Pan number</p>
                                    <input type="text" className='input-type-text' required />
                                </>
                            )}
                        </label>

                        <br />
                        <label>
                            <p className='i-have'>
                                <input type="radio" checked={checkbox4Checked} onChange={handleCheckbox4Change} />
                                I do not  have GSTIN number
                            </p>
                        </label>
                        <br />
                        {checkbox4Checked && (
                            <>
                                <div className='upi_detail'>
                                    <div className="upi_detail1">
                                        <input type="radio" checked={checkbox1Checked} onChange={handleCheckbox1Change} /> Need help with GST Registration<br />
                                    </div>
                                    <div className="upi_detail1">
                                        <input type="radio" checked={checkbox2Checked} onChange={handleCheckbox2Change} /> Apply for self
                                    </div>
                                </div>
                                <p className='apply-by-self'>Apply by self by following simple steps on the Government Portal. It may take a few days for you to avail GSTIN. Meanwhile, you may choose to complete other remaining steps</p>
                            </>
                        )}
                        {checkbox1Checked && (
                            <></>
                        )}
                        {checkbox2Checked && (
                            <></>
                        )}
                    </div>
                    <Link to='/twostepdetail'><button className="Continue123" type="submit">Continue</button></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UpdateYourTexDetails
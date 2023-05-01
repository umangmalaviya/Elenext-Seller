import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/RegisterAndStart.css"

const RegisterAndStart = () => {
    return (
        <div className='register'>
            <div className="container-fluid">
                <p className='inner-rands'>Register and Start Selling</p>
                <p className='please-have'>Please have the following ready before you begin:</p>
                <div className="ul-line">
                    <li>Your bank account details for receiving payments from Elenext</li>
                    <li>Tax (GST/PAN) details of your business</li>
                </div>
                <p className='please-have'>Please ensure that all the information you submit is accurate.</p>
                <p className='enter-details'>Enter details below to continue registration</p>
                <p className='company-bussiness'>Store Name<span style={{ color: "red" }}>*</span></p>
                <input type="text" className='input-type-text' />
                <p className='please-have'>Enter the company/business name as registered in GST/PAN</p>
                <p className='seller-agreement'>Seller Agreement</p>
                <div className="display-flex-for">
                    <input type="checkbox" />I have read and agree to comply with and/or be bound by the terms and conditions of Elenext Services Business Solutions Agreement, Easy Ship Service & Runway Terms and Conditions and Elenext Business (B2B) Terms & Conditions
                </div>
                <button className="Continue123" type="submit">Continue</button>
                <div className="flex-ah">
                    <p className='already-have'>Like to create new account?</p>
                    <Link to='/register'>Click here</Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterAndStart
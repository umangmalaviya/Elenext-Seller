import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/TwoStepV.css"

const TwoStepV = () => {
    return (
        <>
            <div className='two_step_v'>
                <div className='container-fluid'>
                    <h2>Enable Two- Step verification</h2>
                    <p>You must add Two-Step verification to protect your account before you can access it.</p>
                    <div className='two_step_btns'>
                        <Link to="#">Enble Two -step verification </Link>
                        <Link to="#">Skip Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TwoStepV
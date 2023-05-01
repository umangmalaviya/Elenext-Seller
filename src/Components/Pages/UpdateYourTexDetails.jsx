import React, { useState } from 'react'

const UpdateYourTexDetails = () => {
    const [checkbox3Checked, setCheckbox3Checked] = useState(false);
    const [checkbox4Checked, setCheckbox4Checked] = useState(false);

    const handleCheckbox3Change = () => {
        setCheckbox3Checked(!checkbox3Checked);
        setCheckbox4Checked(false);
    };

    const handleCheckbox4Change = () => {
        setCheckbox4Checked(!checkbox4Checked);
        setCheckbox3Checked(false);
    };

    return (
        <div className='register'>
            <div className="container-fluid">
                <p className='inner-rands'>Update your Tex details</p>
                <div className='bankacc_fill'>
                    <label>
                        <input type="radio" checked={checkbox3Checked} onChange={handleCheckbox3Change} />
                        Add to your Bank
                        {checkbox3Checked && (
                            <div className='bankacc_detail'>
                                <p>1st</p>
                            </div>
                        )}
                    </label>

                    <br />
                    <label>
                        <input type="radio" checked={checkbox4Checked} onChange={handleCheckbox4Change} />
                        Other UPI Apps
                    </label>
                    <br />
                    {checkbox4Checked && (
                        <div className='upi_detail'>
                            <p>2nd</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UpdateYourTexDetails
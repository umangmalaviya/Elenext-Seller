import React from 'react'

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
                                <h2>Add a new bank account</h2>
                                <form onSubmit={handleSubmit}>
                                    <label> IFSC code: <br />
                                        <input type="text" value={ifscCode} onChange={(event) => setIfscCode(event.target.value)} />
                                    </label>
                                    <button type="submit">Search</button>
                                </form>
                                {bankDetails && (
                                    <div className='ifsc_detail'>
                                        <p><strong>Bank name:</strong> {bankDetails.BANK}</p>
                                        <p><strong>State:</strong> {bankDetails.STATE}</p>
                                        <p><strong>Branch:</strong> {bankDetails.BRANCH}</p>
                                    </div>
                                )}
                                <label>
                                    Account Number <span>up to 17 digits no hyphens*</span> <br />
                                    <input type="number" value={accnumber} onChange={handleNameChange} />
                                </label>
                                <label>
                                    Re-enter Account Number <span>up to 17 digits no hyphens*</span> <br />
                                    <input type="number" value={reaccnumber} onChange={handleNameCha} />
                                </label>

                                <button className='add_bank'>Add bank account</button>
                                <p>By adding this account, you are authorizing Elenext to share your bank account details with our banking partner to facilitate the refund.</p>
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
                            <input type="text" name="upi" id="upi" placeholder='Enter UPI ID' />
                            <button className='verify_btn'>Verify</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UpdateYourTexDetails
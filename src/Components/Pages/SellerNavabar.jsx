import React from 'react'

const SellerNavabar = () => {
    return (
        <div className="sidenavbar-head">
            <div className="sidenavbar-head-inner">
                <div className="left-sidenavbar-head">
                    <p>Welcome back, FAB 2 FASHION</p>
                    <span>Manage and grow your business with Elenext</span>
                </div>
                <div className="right-sidenavbar-head">
                    <i className="fa-solid fa-comment" style={{ color: '#ffffff' }}></i>
                    <i className="fa-solid fa-bell"></i>
                    <img src={require("../Images/profile.png")} alt=" " style={{cursor: 'pointer'}}/>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default SellerNavabar
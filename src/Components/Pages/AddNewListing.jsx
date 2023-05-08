import React from 'react'
import Sidebar from "./Sidebar"
import SellerNavabar from "./SellerNavabar"
import "../Styles/AddNewListing.css"
import { Link } from "react-router-dom";
import search from "../Images/aln_search.svg"

const AddNewListing = () => {
    return (
        <>
            <div className="home-display-flex">
                <Sidebar />
                <div className="sidenavbar-head">
                    <SellerNavabar />
                    <div className="anl-container">
                        <div className="anl_search_header">
                            Create listings using products available on Elenext how
                        </div>
                        <div className="anl_search_input">
                            <input type="text" className='search_box' placeholder='Search by Elenext product URL' />
                            <Link to='/searchproduct'><img src={search} alt="search" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewListing
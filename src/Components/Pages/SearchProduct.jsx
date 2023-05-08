import React, { useState, useMemo } from 'react'
import Sidebar from "./Sidebar"
import Select from 'react-select'
import countryList from 'react-select-country-list'
// import SellerNavabar from "./SellerNavabar"
import "../Styles/SearchProduct.css"
import cycle from "../Images/cycle.svg"
// import { Link } from "react-router-dom";

const SearchProduct = () => {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }
    return (
        <>
            <div className="home-display-flex">
                <Sidebar />
                <div className="sidenavbar-head">
                    <div className="sp_header">
                        SONY Camara
                    </div>
                    <div className="sp_content">
                        <div className="sp_card">
                            <div className="sp_cd_img">
                                <img src={cycle} className='sp_sub_img' alt="cycle" />
                            </div>
                            <div className="sp_body">
                                <div className="sp_body_header">
                                    SONY ZV-E10L Mirrorless Camera Body with 1650 mm Power
                                    Zoom Lens Vlog Camera
                                </div>
                                <div className="sp_body_sub_header">
                                    Black
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="title_of_content">Brand</div>
                                        <div className="title_of_content">Model Number</div>
                                        <div className="title_of_content">Model Name</div>
                                        <div className="title_of_content">SLR Variant</div>
                                        <div className="title_of_content">Brand Color</div>
                                    </div>
                                    <div className="col-9">
                                        <div className="desc_of_content">SONY</div>
                                        <div className="desc_of_content">ZV-E10L</div>
                                        <div className="desc_of_content">Alpha</div>
                                        <div className="desc_of_content">Body with 1650 mm Power Zoom Lens Vlog...</div>
                                        <div className="desc_of_content">Black</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sp_btns">
                        <button className='sp_btns_1' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Start selling</button>
                        <button className='sp_btns_2'>Add variant</button>
                    </div>
                </div>
            </div>


            {/* models */}
            <div className="modal fade sp_model_1" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 my_model_1" id="staticBackdropLabel">Selling information</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="my_model_container">
                                <div className="my_model_header1">Listing information</div>
                                <div className="my_model_header1_title">Seller SKU ID</div>
                                <input type="text" className='my_model_header1_txt' />

                                <div className="my_model_header1">Status details</div>
                                <div className="my_model_header1_title">Listing Status</div>
                                <select className='my_model_header1_txt' name="status" id="statuss">
                                    <option value="Active">Select one</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                                <div className="my_model_header1_title">MRP</div>
                                <input type="text" className='my_model_header1_txt' /> <b className='unit'>INR</b>
                                <div className="my_model_header1_title">Your selling price</div>
                                <input type="text" className='my_model_header1_txt' /> <b className='unit'>INR</b>
                                <div className="my_model_footer">How much Will i Earn</div>

                                <div className="my_model_header1">Inventory details</div>
                                <div className="my_model_header1_title">Fullfilment by</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Seller' />
                                <div className="my_model_header1_title">Procurement Type</div>
                                <select className='my_model_header1_txt' name="Procurement_Type" id="statuss">
                                    <option value="Active">Select one</option>
                                    <option value="Active">in-stock</option>
                                    <option value="Inactive">express</option>
                                </select>
                                <div className="my_model_header1_title">Stock</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Seller' />

                                <div className="my_model_header1">Delivery Charge To Customer</div>
                                <div className="my_model_header1_title">Local delivery charge</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' /> <b className='unit'>INR</b>
                                <div className="my_model_header1_title">Zonal delivery charge</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' /> <b className='unit'>INR</b>
                                <div className="my_model_header1_title">National delivery charge</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' /> <b className='unit'>INR</b>



                                <div className="my_model_header2">PACKAGE DETAILS <b className='my_model_header2_0'>Total no. of packages: 1</b></div>
                                <div className="my_model_header1_title">Length</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' /> <b className='unit'>cms</b>
                                <div className="my_model_header1_title">Breadth</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' /> <b className='unit'>cms</b>
                                <div className="my_model_header1_title">Height</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' /> <b className='unit'>cms</b>
                                <div className="my_model_header1_title">Weight</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' /> <b className='unit'>kgs</b>

                                <div className="my_model_header1">Text Details</div>
                                <div className="my_model_header1_title">HSN</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' />
                                <div className="my_model_footer">Find relevant HSN codes</div>
                                <div className="my_model_header1_title">Luxury Cess</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' />
                                <div className="my_model_header1_title">Tax Code</div>
                                <select className='my_model_header1_txt' name="Procurement_Type" id="statuss">
                                    <option value="Inactive">GST.0</option>
                                    <option value="Inactive">GST.3</option>
                                    <option value="Inactive">GST.5</option>
                                    <option value="Inactive">GST.12</option>
                                    <option value="Inactive">GST.18</option>
                                    <option value="Inactive">GST.28</option>
                                </select>
                                <div className="my_model_footer">Find relevant Tax codes</div>

                                <div className="my_model_header1">manufacturing details</div>
                                <div className="my_model_header1_title">Name Of Country</div>
                                <Select className='my_model_header1_dd' options={options} value={value} onChange={changeHandler} />
                                <div className="my_model_header1_title">Manufacturer Details</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' />
                                <div className="my_model_header1_title">Packer Details</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' />
                                <div className="my_model_header1_title">Importer Details</div>
                                <input type="text" className='my_model_header1_txt' placeholder='Elemnext' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* models */}
        </>
    )
}

export default SearchProduct
import React, { useState } from "react";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import { NavLink } from "react-router-dom";
// import { FaHome, FaSignOutAlt } from "react-icons/fa";
// import { MdInventory } from "react-icons/md";
import "../Styles/Inventory.css"
// import logo from "../Images/new-seller-logo.svg"
import { Link } from 'react-router-dom'
import FilterIcon from "../Images/filter-icon.svg"
import FilterMenu from "../Images/filter-menu.svg"
import Sidebar from "./Sidebar";
import SellerNavabar from "./SellerNavabar"
import Data from "../Styles/Data/pagination.json"

const Inventory = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const [activeTab, setActiveTab] = useState('inventory');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [CurrentPage, SetCurrentPage] = useState(1)
    const RecordPerPage = 5;
    const LastIndex = CurrentPage * RecordPerPage;
    const FirstIndex = LastIndex - RecordPerPage;
    const Records = Data.slice(FirstIndex, LastIndex);
    const Npage = Math.ceil(Data.length / RecordPerPage);
    const Number = [...Array(Npage + 1).keys()].slice(1)

    return (
        <>
            <div className="home-display-flex">
                <Sidebar />
                <div className="sidenavbar-head">
                    <SellerNavabar />
                    <div className="inventory_main">
                        <div className="seller-container">
                            <div className="inventory_sec">
                                <div className="inventory_parts">
                                    <button className={activeTab === 'inventory' ? 'active' : ''} onClick={() => handleTabClick('inventory')}>
                                        <h3>All Inventory</h3>
                                        <h4><span>484</span> SKUS</h4>
                                    </button>
                                    <button className={activeTab === 'lowStock' ? 'active' : ''} onClick={() => handleTabClick('lowStock')}>
                                        <h3>Low Stock</h3>
                                        <h4><span>0</span> SKUS</h4>
                                    </button>
                                    <button className={activeTab === 'outOfStock' ? 'active' : ''} onClick={() => handleTabClick('outOfStock')}>
                                        <h3>Out of Stock</h3>
                                        <h4><span>1</span> SKUS</h4>
                                    </button>
                                    <button className={activeTab === 'recommend' ? 'active' : ''} onClick={() => handleTabClick('recommend')}>
                                        <h3>Recommendations</h3>
                                        <h4><span>0</span> SKUS</h4>
                                    </button>
                                </div>
                            </div>
                            <div className="filter_part">
                                <div className="filter_stock">
                                    <div className="stockfile_down">
                                        <select id="dropdown">
                                            <option value="">Download Bulk Stock File</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                        <button className="bulckstock_btn">Update Bulk Stock</button>
                                    </div>
                                    <div className="filter_manage">
                                        <Link to="#" className="filter_show"><img src={FilterIcon} alt="filter" /></Link>
                                        <Link to="#" className="filter_menu"><img src={FilterMenu} alt="filter menu" /></Link>
                                    </div>
                                </div>
                            </div>
                            {activeTab === 'inventory' && (
                                <>
                                    <table style={{ background: "#F5F5F5" }} className="inventory_stock">
                                        <thead>
                                            <tr>
                                                <th>Product Information</th>
                                                <th>Current Stock</th>
                                                <th>Sale Rate/Day</th>
                                                <th>Days On Hand</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Records.map((d, i) => (
                                                <tr key={i}>
                                                    <td>
                                                        <div className="inventory_item">
                                                            {/* <img src={require('../Images/inventory-img.png')} alt="inventory img" /> */}
                                                            <img src={d.images} alt="image" />
                                                            <div className="inventory_item_info">
                                                                <h3>{d.productname}</h3>
                                                                <h4>{d.productsku}</h4>
                                                                <h5>{d.productfsn}</h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{d.currentstock}</td>
                                                    <td>{d.salerate}</td>
                                                    <td>{d.daysonhand}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <nav>
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a to="#" className="page-link" onClick={prePage}>Prev</a>
                                            </li>
                                            {
                                                Number.map((n, i) => (
                                                    <li className={`page-item ${CurrentPage === n ? 'active' : ''}`} key={i}>
                                                        <a to="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
                                                    </li>
                                                ))
                                            }
                                            <li className="page-item">
                                                <a to="#" className="page-link" onClick={nextPage}>Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </>
                            )}
                            {activeTab === 'lowStock' && (
                                <div>45645</div>
                            )}
                            {activeTab === 'outOfStock' && (
                                <div>78989</div>
                            )}
                            {activeTab === 'recommend' && (
                                <div>ABCD</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    function prePage() {
        if (CurrentPage !== 1) {
            SetCurrentPage(CurrentPage - 1)
        }
    }
    function changeCPage(id) {
        SetCurrentPage(id)
    }
    function nextPage() {
        if (CurrentPage !== Npage) {
            SetCurrentPage(CurrentPage + 1)
        }
    }

};

export default Inventory;

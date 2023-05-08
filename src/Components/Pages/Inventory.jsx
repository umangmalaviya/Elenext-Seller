import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import "../Styles/Inventory.css"
import logo from "../Images/new-seller-logo.svg"
import { Link } from 'react-router-dom'
import FilterIcon from "../Images/filter-icon.svg"
import FilterMenu from "../Images/filter-menu.svg"
import Sidebar from "./Sidebar";
import SellerNavabar from "./SellerNavabar"

const Inventory = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const [activeTab, setActiveTab] = useState('inventory');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

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
                                        <tr>
                                            <td>
                                                <div className="inventory_item">
                                                    <img src={require('../Images/inventory-img.png')} alt="inventory img" />
                                                    <div className="inventory_item_info">
                                                        <h3>FAB 2 FASHION Anarkali Gown</h3>
                                                        <h4>SKU ID: F2F-G1002-Blue</h4>
                                                        <h5>FSN ID: GWNFN3TFCEQ4DFHF</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inventory_item">
                                                    <img src={require('../Images/inventory-img.png')} alt="inventory img" />
                                                    <div className="inventory_item_info">
                                                        <h3>FAB 2 FASHION Anarkali Gown</h3>
                                                        <h4>SKU ID: F2F-G1002-Blue</h4>
                                                        <h5>FSN ID: GWNFN3TFCEQ4DFHF</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inventory_item">
                                                    <img src={require('../Images/inventory-img.png')} alt="inventory img" />
                                                    <div className="inventory_item_info">
                                                        <h3>FAB 2 FASHION Anarkali Gown</h3>
                                                        <h4>SKU ID: F2F-G1002-Blue</h4>
                                                        <h5>FSN ID: GWNFN3TFCEQ4DFHF</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inventory_item">
                                                    <img src={require('../Images/inventory-img.png')} alt="inventory img" />
                                                    <div className="inventory_item_info">
                                                        <h3>FAB 2 FASHION Anarkali Gown</h3>
                                                        <h4>SKU ID: F2F-G1002-Blue</h4>
                                                        <h5>FSN ID: GWNFN3TFCEQ4DFHF</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inventory_item">
                                                    <img src={require('../Images/inventory-img.png')} alt="inventory img" />
                                                    <div className="inventory_item_info">
                                                        <h3>FAB 2 FASHION Anarkali Gown</h3>
                                                        <h4>SKU ID: F2F-G1002-Blue</h4>
                                                        <h5>FSN ID: GWNFN3TFCEQ4DFHF</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inventory_item">
                                                    <img src={require('../Images/inventory-img.png')} alt="inventory img" />
                                                    <div className="inventory_item_info">
                                                        <h3>FAB 2 FASHION Anarkali Gown</h3>
                                                        <h4>SKU ID: F2F-G1002-Blue</h4>
                                                        <h5>FSN ID: GWNFN3TFCEQ4DFHF</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inventory_item">
                                                    <img src={require('../Images/inventory-img.png')} alt="inventory img" />
                                                    <div className="inventory_item_info">
                                                        <h3>FAB 2 FASHION Anarkali Gown</h3>
                                                        <h4>SKU ID: F2F-G1002-Blue</h4>
                                                        <h5>FSN ID: GWNFN3TFCEQ4DFHF</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inventory_item">
                                                    <img src={require('../Images/inventory-img.png')} alt="inventory img" />
                                                    <div className="inventory_item_info">
                                                        <h3>FAB 2 FASHION Anarkali Gown</h3>
                                                        <h4>SKU ID: F2F-G1002-Blue</h4>
                                                        <h5>FSN ID: GWNFN3TFCEQ4DFHF</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inventory_item">
                                                    <img src={require('../Images/inventory-img.png')} alt="inventory img" />
                                                    <div className="inventory_item_info">
                                                        <h3>FAB 2 FASHION Anarkali Gown</h3>
                                                        <h4>SKU ID: F2F-G1002-Blue</h4>
                                                        <h5>FSN ID: GWNFN3TFCEQ4DFHF</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="inventory_item">
                                                    <img src={require('../Images/inventory-img.png')} alt="inventory img" />
                                                    <div className="inventory_item_info">
                                                        <h3>FAB 2 FASHION Anarkali Gown</h3>
                                                        <h4>SKU ID: F2F-G1002-Blue</h4>
                                                        <h5>FSN ID: GWNFN3TFCEQ4DFHF</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>2</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                            {activeTab === 'lowStock' && (
                                <div>456</div>
                            )}
                            {activeTab === 'outOfStock' && (
                                <div>789</div>
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
};

export default Inventory;

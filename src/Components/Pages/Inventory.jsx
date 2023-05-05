import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import "../Styles/Inventory.css"
import logo from "../Images/new-seller-logo.svg"

const Inventory = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className="home-display-flex">
                <Navbar bg="light" expand="lg" expanded={expanded} className="sidenavbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-column">
                            <img src={logo} alt="logo" className="logo" />
                            <LinkContainer to="/Home" exact>
                                <Nav.Link as={NavLink} to="/home" exact ativeclassname="active">
                                    <FaHome className="mr-2" size='25px' /> Home
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Inventory" exact>
                                <Nav.Link as={NavLink} to="/Inventory" exact ativeclassname="active">
                                    <MdInventory className="mr-2" size='25px' /> Inventory
                                </Nav.Link>
                            </LinkContainer>

                            <NavDropdown title="Inventory" id="basic-nav-dropdown">
                                <LinkContainer to="/settings/inventoryhealth">
                                    <NavDropdown.Item as={NavLink} to="/settings/inventoryhealth" ativeclassname="active">
                                        Inventory Health
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            <LinkContainer to="/logout">
                                <Nav.Link as={NavLink} to="/logout" ativeclassname="active">
                                    <FaSignOutAlt className="mr-2" /> Logout
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div className="sidenavbar-head">
                    <div className="sidenavbar-head-inner">
                        <div className="left-sidenavbar-head">
                            <p>Welcome back, FAB 2 FASHION</p>
                            <span>Manage and grow your business with Elenext</span>
                        </div>
                        <div className="right-sidenavbar-head">
                            <i className="fa-solid fa-comment" style={{ color: '#ffffff' }}></i>
                            <i className="fa-solid fa-bell"></i>
                            <img src={require("../Images/profile.png")} alt=" " />
                        </div>
                    </div>
                    <hr />
                    <div className="inventory_sec">
                        <div className="container-fluid">
                            <div className="inventory_parts">
                                <div className="inventory_parts_inn all_inventory">
                                    <h3>All Inventory</h3>
                                    <h4><span>484</span> SKUS</h4>
                                </div>
                                <div className="inventory_parts_inn lows_inventory">
                                    <h3>Low Stock</h3>
                                    <h4><span>0</span> SKUS</h4>
                                </div>
                                <div className="inventory_parts_inn outofs_inventory">
                                    <h3>Out of Stock</h3>
                                    <h4><span>1</span> SKUS</h4>
                                </div>
                                <div className="inventory_parts_inn recom_inventory">
                                    <h3>Recommendations</h3>
                                    <h4><span>0</span> SKUS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inventory;

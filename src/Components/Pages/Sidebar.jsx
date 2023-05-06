import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { MdInventory, MdSettings } from "react-icons/md";
import "../Styles/Home.css"
import logo from "../Images/new-seller-logo.svg"
import { FaHome } from "react-icons/fa";
import { RiInboxArchiveFill } from "react-icons/ri";
import { HiCurrencyDollar } from "react-icons/hi";
import { CiDiscount1 } from "react-icons/ci";
import { TbSpeakerphone, TbLogout } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Sidebar = () => {

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
                            <LinkContainer to="/Home" exact="true">
                                <Nav.Link as={NavLink} to="/Inventory" exact="true" ativeclassname="active">
                                    <FaHome className="mr-2" size='25px' /> Home
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Inventory" exact="true">
                                <Nav.Link as={NavLink} to="/Inventory" exact="true" ativeclassname="active">
                                    <MdInventory className="mr-2" size='25px' /> Inventory
                                </Nav.Link>
                            </LinkContainer>

                            {/* <LinkContainer to="/Demo" exact='true'>
                                <Nav.Link as={NavLink} to="/Demo" exact="true" ativeclassname="active">
                                    <RiInboxArchiveFill className="mr-2" size='25px' />
                                    <NavDropdown title="Return Product" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={NavLink} to="/Demo" ativeclassname="active" exact='true'>
                                            <RiInboxArchiveFill className="mr-2" size='25px' />
                                            Abc
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={NavLink} to="/Demo" ativeclassname="active">
                                            <RiInboxArchiveFill className="mr-2" size='25px' />
                                            DEF
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav.Link>
                            </LinkContainer> */}

                            <LinkContainer to="/Price" exact="true">
                                <Nav.Link as={NavLink} to="/Price" exact="true" ativeclassname="active">
                                    <HiCurrencyDollar className="mr-2" size='25px' /> Price Recommendation
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Promotions" exact="true">
                                <Nav.Link as={NavLink} to="/Promotions" exact="true" ativeclassname="active">
                                    <CiDiscount1 className="mr-2" size='25px' /> Promotions
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Advertisement" exact="true">
                                <Nav.Link as={NavLink} to="/Advertisement" exact="true" ativeclassname="active">
                                    <TbSpeakerphone className="mr-2" size='25px' /> Advertisement
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Settings" exact="true">
                                <Nav.Link as={NavLink} to="/Settings" exact="true" ativeclassname="active">
                                    <MdSettings className="mr-2" size='25px' /> Settings
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Help" exact="true">
                                <Nav.Link as={NavLink} to="/Help" exact="true" ativeclassname="active">
                                    <TfiHeadphoneAlt className="mr-2" size='25px' /> Help & Support
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/LogOut" exact="true" className="red">
                                <Nav.Link as={NavLink} to="/LogOut" exact="true" ativeclassname="active" >
                                    <TbLogout className="mr-2" size='25px' /> Log Out
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
                </div>
            </div>
        </>
    )
}

export default Sidebar
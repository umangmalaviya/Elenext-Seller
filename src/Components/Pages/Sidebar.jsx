import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { MdInventory, MdSettings } from "react-icons/md";
import "../Styles/Home.css"
import logo from "../Images/new-seller-logo.svg"
import { FaHome, FaPercentage } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { HiCurrencyDollar, HiSpeakerphone } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Navbar bg="light" expand="lg" expanded={expanded} className="sidenavbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-column">
                        <img src={logo} alt="logo" className="logo" />
                        <div className="upside-navbar">
                            <LinkContainer to="/Home" exact="true">
                                <Nav.Link as={NavLink} to="/Home" exact="true" ativeclassname="active">
                                    <FaHome className="mr-2" size='25px' /> Home
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Inventory" exact="true">
                                <Nav.Link as={NavLink} to="/Inventory" exact="true" ativeclassname="active">
                                    <MdInventory className="mr-2" size='25px' /> Inventory
                                </Nav.Link>
                            </LinkContainer>
                        </div>

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

                        <div className="downside-navbar">
                            <LinkContainer to="/Price" exact="true">
                                <Nav.Link as={NavLink} to="/Price" exact="true" ativeclassname="active">
                                    <HiCurrencyDollar className="mr-2" size='25px' /> Price Recommendation
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Promotions" exact="true">
                                <Nav.Link as={NavLink} to="/Promotions" exact="true" ativeclassname="active">
                                    <FaPercentage className="mr-2" size='25px' /> Promotions
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Advertisement" exact="true">
                                <Nav.Link as={NavLink} to="/Advertisement" exact="true" ativeclassname="active">
                                    <HiSpeakerphone className="mr-2" size='25px' /> Advertisement
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Settings" exact="true">
                                <Nav.Link as={NavLink} to="/Settings" exact="true" ativeclassname="active">
                                    <MdSettings className="mr-2" size='25px' /> Settings
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Help" exact="true">
                                <Nav.Link as={NavLink} to="/Help" exact="true" ativeclassname="active">
                                    <RiCustomerServiceFill className="mr-2" size='25px' /> Help & Support
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/LogOut" exact="true" className="red">
                                <Nav.Link as={NavLink} to="/LogOut" exact="true" ativeclassname="active" >
                                    <TbLogout className="mr-2" size='25px' /> Log Out
                                </Nav.Link>
                            </LinkContainer>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Sidebar
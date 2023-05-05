import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import "../Styles/Demo.css"
import logo from "../Images/new-seller-logo.svg"
import Chart from "react-apexcharts";

const Home = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const [state, setState] = useState({
        options: {
            colors: ["#00BA00", "#FF9800"],
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
        },
        series: [
            {
                name: "People Born",
                data: [0, 6000, 5000, 10000, 6500, 14000, 4000],
            },
        ],
    });

    return (
        <>
            <div className="home-display-flex">
                <Navbar bg="light" expand="lg" expanded={expanded} className="sidenavbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-column">
                            <img src={logo} alt="logo" className="logo" />
                            <LinkContainer to="/Home" exact>
                                <Nav.Link as={NavLink} to="/Inventory" exact ativeclassname="active">
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
                    <div className="middle-sidenavbar-inner">
                        <div className="chart">
                            <Chart
                                options={state.options}
                                series={state.series}
                                type="area"
                                width="800"
                            />
                        </div>
                        <div className="right-miidle-sidebar-inner">
                            <div className="up-corner">
                                <div className="new-order">
                                    <div className="qwedsa">
                                        <img src={require("../Images/green-pipe.png")} alt=" " />
                                        <div className="new-order-name">
                                            <p>New Orders</p>
                                            <span>2520.22</span>
                                        </div>
                                        <div className="new-order-icon">
                                            <img src={require("../Images/new-order.png")} alt=" " />
                                        </div>
                                    </div>
                                    <div className="plus">
                                        <span>↑+6.5%</span>
                                        <p>Since last week</p>
                                    </div>
                                </div>
                                <div className="new-order">
                                    <div className="qwedsa">
                                        <img src={require("../Images/red-pipe.png")} alt=" " />
                                        <div className="new-order-name">
                                            <p>Active Listings</p>
                                            <span>25</span>
                                        </div>
                                        <div className="new-order-icon1">
                                            <img src={require("../Images/active-listing.png")} alt=" " />
                                        </div>
                                    </div>
                                    <div className="plus1">
                                        <span>&darr;</span><span>+6.5%</span>
                                        <p>Since last week</p>
                                    </div>
                                </div>
                            </div>
                            <div className="down-corner">
                                <div className="new-order">
                                    <div className="qwedsa">
                                        <img src={require("../Images/green-pipe.png")} alt=" " />
                                        <div className="new-order-name">
                                            <p>Units Sold</p>
                                            <span>02</span>
                                        </div>
                                        <div className="new-order-icon">
                                            <img src={require("../Images/units-sold.png")} alt=" " />
                                        </div>
                                    </div>
                                    <div className="plus">
                                        <span>↑+7.5%</span>
                                        <p>Since last week</p>
                                    </div>
                                </div>
                                <div className="new-order">
                                    <div className="qwedsa">
                                        <img src={require("../Images/green-pipe.png")} alt=" " />
                                        <div className="new-order-name">
                                            <p>Sales</p>
                                            <span>11,555</span>
                                        </div>
                                        <div className="new-order-icon">
                                            <img src={require("../Images/sales.png")} alt=" " />
                                        </div>
                                    </div>
                                    <div className="plus">
                                        <span>↑+10.5%</span>
                                        <p>Since last week</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overview">
                                <p className="over">Overview</p>
                                <div className="grid-container">
                                    <div className="grid-item item1">1</div>
                                    <div className="grid-item item2">2</div>
                                    <div className="grid-item item3">3</div>
                                    <div className="grid-item item4">4</div>
                                    <div className="grid-item item5">5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

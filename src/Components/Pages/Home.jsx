import React, { useState } from "react";
import Sidebar from "../Pages/Sidebar"
import "../Styles/Home.css"
import Chart from "react-apexcharts";
import calender from "../Images/calender.svg"
import s1 from "../Images/s1.svg"
import s2 from "../Images/s2.svg"
import s3 from "../Images/s3.svg"
import big_sale from "../Images/big_sale.svg"
import SellerNavabar from "./SellerNavabar";

const Home = () => {

    const [state] = useState({
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
                <Sidebar />
                <div className="sidenavbar-head">
                    <SellerNavabar />
                    <div className="seller-container">
                        <div className="middle-sidenavbar-inner">
                            <div className="chart">
                                <Chart
                                    options={state.options}
                                    series={state.series}
                                    type="area"
                                />
                            </div>
                            <div className="right-miidle-sidebar-inner">
                                <div className="bundle">
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
                                </div>

                                <div className="overview">
                                    <p className="over">Overview</p>
                                    <div className="row">
                                        <div className="col-3 grid-item item1">
                                            <div className="grid_number">59</div>
                                            <div className="grid_txt">Adidas</div>
                                            <div className="grid_txt">Air Max</div>
                                        </div>
                                        <div className="col-9">
                                            <div className="row">
                                                <div className="col-7 grid-item item4">
                                                    <div className="grid_number">42</div>
                                                    <div className="grid_txt">Nike Tanjun</div>
                                                </div>
                                                <div className="col-5 grid-item item2">
                                                    <div className="grid_number">4</div>
                                                    <div className="grid_txt">Vans Word</div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 grid-item item5">
                                                    <div className="grid_number">42</div>
                                                    <div className="grid_txt">Nike Tanjun</div>
                                                </div>
                                                <div className="col-6 grid-item item3">
                                                    <div className="grid_number">18</div>
                                                    <div className="grid_txt">Nick Air Max 270</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sections">
                            <div className="section_4">
                                <button className="section_4_btn">Select Date <img src={calender} alt="calender" /> </button>
                                <span>Todays - 17/12/2014</span>

                                <div className="second_part_section_4">
                                    <div className="sp_contante1">
                                        <div className="sp_btn_1">
                                            <h3>18</h3>
                                            <p>Customers</p>
                                        </div>
                                        <div className="sp_txt">
                                            <p>New:10</p>
                                            <p>Repeat: 16</p>
                                        </div>
                                    </div>
                                    {/* <img className="sp_img" src={forword} alt="forword" /> */}
                                    <div className="sp_contante1">
                                        <div className="sp_btn_1">
                                            <h3>22</h3>
                                            <p>Orders</p>
                                        </div>
                                        <div className="sp_txt">
                                            <p>Repeat: 16</p>
                                            <p>Average order</p>
                                            <p>value: 16r</p>
                                        </div>
                                    </div>
                                    {/* <img className="sp_img" src={forword} alt="forword" /> */}
                                    <div className="sp_contante2">
                                        <div className="sp_btn_2">
                                            <h3>N198,555</h3>
                                            <p>Revenue</p>
                                        </div>
                                        <div className="sp_txt">
                                            <p>Subtotal:10</p>
                                            <p>Shipping: 16</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section_5">
                                <div className="s5_header">
                                    <div className="header1">Low stock alert</div>
                                    <div className="header2">View all</div>
                                </div>
                                <div className="s5_content">
                                    <img src={s1} alt="s1" className="s5_img" />
                                    <div className="content_txt">

                                        <div className="content_name">
                                            Black Mamba Nike
                                        </div>
                                        <div className="content_number">3</div>
                                    </div>
                                </div>
                                <div className="s5_content">
                                    <img src={s2} alt="s2" className="s5_img" />
                                    <div className="content_txt">

                                        <div className="content_name">
                                            Black Mamba Nike
                                        </div>
                                        <div className="content_number">1</div>
                                    </div>
                                </div>
                                <div className="s5_content">
                                    <img src={s3} alt="s3" className="s5_img" />
                                    <div className="content_txt">

                                        <div className="content_name">
                                            Black Mamba Nike
                                        </div>
                                        <div className="content_number">1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section_6">
                            <img src={big_sale} alt="big_sale" className="s6_img" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;

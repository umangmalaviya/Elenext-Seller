import React, { useState } from "react";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../Styles/Demo.css";
import logo from "../Images/seller-logo.svg";
import { RiInboxArchiveFill } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { TbSpeakerphone, TbLogout } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaHome, FaPercentage } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { HiCurrencyDollar, HiSpeakerphone } from "react-icons/hi";

// const Demo = () => {
//     const [isOpen, setIsOpen] = useState(true);
//     const toggle = () => setIsOpen(!isOpen);

//     const mediaQuery = window.matchMedia('(max-width: 1200px)');
//     mediaQuery.addListener(handleMediaQueryChange);

//     function handleMediaQueryChange(event) {
//         if (event.matches) {
//             setIsOpen(false)
//         }
//         else {
//             setIsOpen(true)
//         }
//     }

//     return (
//         <>
//             <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar123">
//                 <div className="top_section123">
//                     <h1 style={{ display: isOpen ? "block" : "none" }} className="logo123">
//                         <img src={logo} alt="" />
//                     </h1>
//                     <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars123">
//                         <FaBars onClick={toggle} />
//                     </div>
//                 </div>
//                 {menuItem.map((item, index) => (
//                     <NavLink
//                         to={item.path}
//                         key={index}
//                         className="link123"
//                         activeclassname="active"
//                     >
//                         <div className="icon123">{item.icon}</div>
//                         <div
//                             style={{ display: isOpen ? "block" : "none" }}
//                             className="link_text123"
//                         >
//                             {item.name}
//                         </div>
//                     </NavLink>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Demo;





import SidebarItem from "../Pages/SidebarItem"
import items from "../Styles/Data/Sidebar.json"
import "../Styles/Demo.css";

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const mediaQuery = window.matchMedia('(max-width: 1200px)');
    mediaQuery.addListener(handleMediaQueryChange);

    function handleMediaQueryChange(event) {
        if (event.matches) {
            setIsOpen(false)
        }
        else {
            setIsOpen(true)
        }
    }

    return (
        <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar123">
            <div className="top_section123">
                <h1 style={{ display: isOpen ? "block" : "none" }} className="logo123">
                    <img src={logo} alt="" />
                </h1>
                <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars123">
                    <FaBars onClick={toggle} />
                </div>
            </div>
            {items.map((item, index) => <SidebarItem key={index} item={item} />)}
        </div>
    )
}

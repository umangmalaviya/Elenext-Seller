

import "../Styles/Demo.css";
import { useState } from "react"

export default function SidebarItem({ item, isOpen, toggle }) {
    const [open, setOpen] = useState(false)

    function toggleStyle() {
        setOpen(!open);
    }

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"} onClick={toggleStyle}>
                <div className="sidebar-title" style={{ color: item.color }} onClick={() => setOpen(!open)}>
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                    </span>
                    <span className="item-title">
                        {item.title}
                    </span>
                    <i className="bi-chevron-down toggle-btn"></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        )
    }
    else {
        return (
            <a href={item.path || "#"} className="sidebar-item sidebar-title plain" style={{ color: item.color }}>
                {item.icon && <i className={item.icon}></i>}
                <span className="item-title" >
                    {item.title}
                </span>
            </a>
        )
    }
}
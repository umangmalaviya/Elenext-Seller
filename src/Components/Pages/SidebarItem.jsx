

import "../Styles/Demo.css";
import { useState } from "react"

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)


    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                    </span>
                    <span className="item-title">
                        {item.title}
                    </span>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <a href={item.path || "#"} className="sidebar-item sidebar-title plain">
                {item.icon && <i className={item.icon}></i>}
                <span className="item-title">
                    {item.title}
                </span>
            </a>
        )
    }
}
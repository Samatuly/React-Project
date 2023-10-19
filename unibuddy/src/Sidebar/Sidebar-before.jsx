import React from "react";
import './sidebar.css';
import {SidebarData_before} from "./SidebarData_before"

function Sidebar(){
    return(
        <div className="sidebar">
            <ul className="sidebarList">
                {SidebarData_before.map((val, key) => {
                    return <li className="row"
                               id={window.location.pathname == val.link ? "active" : ""}
                               key = {key} onClick={() => {window.location.pathname = val.link}}>
                        <div className="sidebar-icon">{val.icon}</div>
                        {" "}
                        <div>{val.title}</div>
                    </li>;
                })}
            </ul>
        </div>
    )
}

export default Sidebar;
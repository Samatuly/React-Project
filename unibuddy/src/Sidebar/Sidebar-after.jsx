import React from "react";
import './sidebar.css';
import {SidebarData} from "./SidebarData"

function Sidebar(){
    return(
        <div className="sidebar">
            <ul className="sidebarList">
                {SidebarData.map((val, key) => {
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
import React from "react";
import s from './Sidebar.module.css';

const Sidebar = () => {
    return(
    <nav className="sidebar">
        <div className="sidebar-list">
            <div>
                Profile
            </div>
            <div>
                Organisation
            </div>
            <div>
                Schedule
            </div>
            <div>
                E-Library
            </div>
        </div>
    </nav>
    );
}

export default Sidebar;
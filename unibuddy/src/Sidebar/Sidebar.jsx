import React from "react";
import s from './Sidebar.module.css';

const Sidebar = () => {
    return(
    <nav className="sidebar">
        <div className="sidebar-menu">
            <div className="sidebar-icon">
                <a href="/profile">Profile</a>
            </div>
            <div className="sidebar-icon">
                <a href="/organisation">Organisation</a>
            </div>
            <div className="sidebar-icon">
                <a href="/schedule">Schedule</a>
            </div>
            <div className="sidebar-icon">
                <a href="/e_library">E-Library</a>
            </div>
            <div className="sidebar-icon">
                <a href="/login">Login</a>
            </div>
        </div>
    </nav>
    );
}

export default Sidebar;
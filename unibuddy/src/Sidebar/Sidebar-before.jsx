import React from "react";
import s from './Sidebar.module.css';

const Sidebar_before = () => {
    return(
    <nav className="sidebar">
        <div className="sidebar-menu">
            <div className="sidebar-icon">
                <a href="/login">Sign In</a>
            </div>
        </div>
    </nav>
    );
}

export default Sidebar_before;
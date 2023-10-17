import React, {useState} from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { auth } from '../Firebase/Firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import s from './Sidebar.module.css';

const Sidebar_after = () => {

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
                <a href="/logout">Sign Out</a>
            </div>
        </div>
    </nav>
    );
}

export default Sidebar_after;
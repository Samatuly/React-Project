import "./topbar.css";
import React from "react";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="topbar-logo">UniBuddy</span>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search className="search-icon" />
          <input placeholder="Search..." className="search-input" />
        </div>
      </div>
      <div className="topbar-right">
        <span className="topbar-link">Homepage</span>
        <span className="topbar-link">Timeline</span>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person></Person>
            <span className="topbar-icon-bage">1</span>
          </div>
          <div className="topbar-icon-item">
            <Chat></Chat>
            <span className="topbar-icon-bage">2</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications></Notifications>
            <span className="topbar-icon-bage">1</span>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/736x/2d/1c/1d/2d1c1d5bd5930c5f886b9a5e6ab299a4.jpg"
          className="topbar-img"
        ></img>
      </div>
    </div>
  );
}

export default Topbar;
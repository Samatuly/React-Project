import './topbar.css'
import React, {useState} from "react"
import {Chat, Notifications, Person, Search} from "@mui/icons-material"
import {Link} from "react-router-dom";
import Share from "../Home/Share/Share";
import {Posts} from "../Home/Share/Data";

function Topbar({onSearch}) {
    const [searchInput, setSearchInput] = useState("");
    const [filteredPosts, setFilteredPosts] = useState(Posts);

    const handleInputChange = (e) => {
        e.preventDefault();
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);
        onSearch(searchTerm);
    };

    return(
        <div className="topbar-container">
            <div className="topbar-left">
                <span className="topbar-logo">UniBuddy</span>
            </div>
            <div className="topbar-center">
                <div className="search-bar">
                    <Search className="search-icon" />
                    <input
                        placeholder="Search..."
                        className="search-input"
                        type="text"
                        value={searchInput}
                        onChange={handleInputChange}
                    />
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
                <Link to="/profile"><img src="https://i.pinimg.com/736x/2d/1c/1d/2d1c1d5bd5930c5f886b9a5e6ab299a4.jpg" className="topbar-img"></img></Link>
            </div>
        </div>
    )
}

export default Topbar;
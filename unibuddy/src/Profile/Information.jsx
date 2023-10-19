import React from "react";
import "./profile.css";
function Information(){
    return (
        <div className="Profile">
            <div className="ProfileImg">
                <img className="imgMan" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/640px-Outdoors-man-portrait_%28cropped%29.jpg"/>
            </div>
            <div className="ProfileInfo">
                <label>Full Name</label>
                <input placeholder="Patric Smith" type="text"></input>
                <label>Email</label>
                <input placeholder="p_smith@kbtu.kz" type="email"></input>
                <label>Faculty</label>
                <input placeholder="Computer Science and Software"></input>
            </div>
        </div>
    );
}

export default Information;
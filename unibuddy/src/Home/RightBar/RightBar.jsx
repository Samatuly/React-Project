import React from "react";
import './rightbar.css'
import {ZoomOut, ZoomOutMap} from "@mui/icons-material";

function RightBar(){
    return(
        <div className="rightBar-container">
            <div className="rightBar-wrapper">
                <div className="rightBar-top">
                    <div className="organization-container">
                        <div className="organization-top">
                            <span className="organizations-text">Organizations</span>
                        </div>
      
                        <ul className="organizations-list">
                            <li>                <img src="https://i.pinimg.com/736x/2d/1c/1d/2d1c1d5bd5930c5f886b9a5e6ab299a4.jpg" className="organizations-img"></img>
                                Faces</li>
                            <li>                <img src="https://i.pinimg.com/736x/2d/1c/1d/2d1c1d5bd5930c5f886b9a5e6ab299a4.jpg" className="organizations-img"></img>
                                Faces</li>
                            <li>                 <img src="https://i.pinimg.com/736x/2d/1c/1d/2d1c1d5bd5930c5f886b9a5e6ab299a4.jpg" className="organizations-img"></img>
                                Faces</li>
                        </ul>
                        <button className="organizations-button">View all</button>
                    </div>
                </div>
                <div className="rightBar-bottom">
                    <div className="schedule-container">
                        <div className="schedule-top">
                            <span className="schedule-text">Schedule for today!</span>
                            <ZoomOutMap/>
                        </div>
                        <hr/>
                        <img className="schedule-image" src="https://marketplace.canva.com/EAFN8syLrEw/1/0/900w/canva-gray-and-brown-minimalist-schedule-today-instagram-story-oJoSA9xf8NI.jpg"></img></div>
                </div>
            </div>
        </div>
    )
}
export default RightBar;

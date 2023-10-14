import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import './canteen.css'
import {ZoomOutMap} from "@mui/icons-material";
import Menu from "./Menu/Menu";

function Canteen(){
    return(
        <>
            <div className="canteen">
                <div className="canteen-wrapper">
                    <div className="canteen-left">
                        <Menu/>
                    </div>
                    <div className="canteen-right">
                        <div className="canteen-container">
                            <div className="canteen-top">
                                <span className="canteen-text">Menu for today!</span>
                                <ZoomOutMap/>
                            </div>
                            <hr/>
                            <img className="canteen-image-2" src="https://marketplace.canva.com/EAFN8syLrEw/1/0/900w/canva-gray-and-brown-minimalist-schedule-today-instagram-story-oJoSA9xf8NI.jpg"></img></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Canteen;
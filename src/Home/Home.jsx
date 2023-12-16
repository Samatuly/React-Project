import React from "react";
import './home.css'
import Share from "./Share/Share";
import RightBar from "./RightBar/RightBar";
import Sidebar from "../Sidebar/Sidebar";

function Home({ searchTerm }){

    return(
        <>
            <div className="home-container">
                <Share searchTerm={searchTerm}/>
                <RightBar/>
            </div>
        </>
    );
}
export default Home;
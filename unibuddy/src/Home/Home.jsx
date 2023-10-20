import React from "react";
import "./home.css";
import Share from "./Share/Share";
import RightBar from "./RightBar/RightBar";
import Sidebar from "../Sidebar/Sidebar";

function Home() {
  return (
    <>
      <div className="home-container">
        <Share />
        <RightBar />
      </div>
    </>
  );
}
export default Home;

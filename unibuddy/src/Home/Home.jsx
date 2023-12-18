import React from "react";
import "./home.css";
import Share from "./Share/Share";
import RightBar from "./RightBar/RightBar";
import Sidebar from "../Sidebar/Sidebar";
window.addEventListener("load", async () => {
  if (navigator.serviceWorker) {
    try {
      const reg = await navigator.serviceWorker.register("../pwa-sw.js");
      console.log("Serivce worker register success ", reg);
    } catch (err) {
      console.log("Serivce worker register failed");
    }
  }
});
function Home({ searchTerm }) {
  return (
    <>
      <div className="home-container">
        <Share searchTerm={searchTerm} />
        <RightBar />
      </div>
    </>
  );
}
export default Home;

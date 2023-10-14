import './App.css';
import Home from "./Home/Home";
import Canteen from "./Canteen/Canteen";
import Topbar from "./Topbar/Topbar"
import {Route, Routes} from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Ratings from "./Ratings/Ratings";
function App() {
  return (
    <>
        <Topbar/>
        <Sidebar/>
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/canteen" element={<Canteen />}></Route>
            <Route path="/ratings" element={<Ratings />}></Route>
        </Routes>
    </>
  );
}
export default App;

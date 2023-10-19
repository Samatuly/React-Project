import './App.css';
import Home from "./Home/Home";
import Canteen from "./Canteen/Canteen";
import Topbar from "./Topbar/Topbar"
import {Route, Routes} from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Ratings from "./Ratings/Ratings";
import Faculty from "./Ratings/Faculty";
import Professors from "./Ratings/Professors";
function App() {
  return (
    <>
        <Topbar/>
        <Sidebar/>
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/canteen" element={<Canteen />}></Route>
            <Route path="/ratings" element={<Faculty />}></Route>
            <Route path="/professors" element={<Professors/>}></Route>
        </Routes>
    </>
  );
}
export default App;

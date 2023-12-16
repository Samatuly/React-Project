import './App.css';
import Home from "./Home/Home";
import Canteen from "./Canteen/Canteen";
import Topbar from "./Topbar/Topbar"
import {Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import Sidebar from "./Sidebar/Sidebar";
import Faculty from "./Ratings/Faculty";
import Professors from "./Ratings/Professors";
import Organizations from "./Organizations/Organizations";
import Profile from "./Profile/Profile";
import Information from "./Profile/Information";
import Schedule from "./Schedule/Schedule";
function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

  return (
    <>
        <Topbar onSearch={handleSearch}/>
        <Sidebar/>
        <Routes>
            <Route path="/home" element={<Home searchTerm={searchTerm}/>}></Route>
            <Route path="/canteen" element={<Canteen />}></Route>
            <Route path="/ratings" element={<Faculty />}></Route>
            <Route path="/professors" element={<Professors/>}></Route>
            <Route path="/organizations" element={<Organizations />}></Route>
            <Route path="/schedule" element={<Schedule/>}></Route>
            <Route path="/profile" element={<Information/>}></Route>
        </Routes>
    </>
  );
}
export default App;

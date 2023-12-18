// import "./App.css";
// import Home from "./Home/Home";
// import Canteen from "./Canteen/Canteen";
// import Topbar from "./Topbar/Topbar";
// import { Route, Routes } from "react-router-dom";
// import React from "react";
// import Sidebar from "./Sidebar/Sidebar";
// import Ratings from "./Ratings/Ratings";
// import Faculty from "./Ratings/Faculty";
// import Professors from "./Ratings/Professors";
// function App() {
//   return (
//     <>
//       <Topbar />
//       <Sidebar />
//       <Routes>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/canteen" element={<Canteen />}></Route>
//         <Route path="/ratings" element={<Faculty />}></Route>
//         <Route path="/professors" element={<Professors />}></Route>
//       </Routes>
//     </>
//   );
// }
// export default App;
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sidebar_before from "./Sidebar/Sidebar-before";
import Sidebar from "./Sidebar/Sidebar";
import Schedule from "./Schedule/Schedule";
import Profile from "./Profile/Profile.jsx";
import Organisation from "./Organisation/Organisation.jsx";
import E_Library from "./E-Library/E-Library";
import BookDetail from "./E-Library/BookDetail";
import Register from "./Login/Register";
import SignIn from "./Login/Login";
import SignOut from "./Login/Logout";
import Home from "./Home/Home";
import Canteen from "./Canteen/Canteen";
import Ratings from "./Ratings/Ratings";
import Topbar from "./Topbar/Topbar";
import Faculty from "./Ratings/Faculty.jsx";
import Professores from "./Ratings/Professors.js";
import Map from "../src/Map/Map.jsx";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("isSignedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Topbar className="app-topbar" onSearch={handleSearch} />
        {isSignedIn ? <Sidebar /> : <Sidebar_before />}
        <Routes>
          <Route path="/home" element={<Home searchTerm={searchTerm}/>} />
          <Route path="/canteen" element={<Canteen />} />
          <Route path="/ratings" element={<Faculty />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/organizations" element={<Organisation />} />
          <Route path="/professors" element={<Professores />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/e_library" element={<E_Library />} />
          <Route path="/e_library/:bookId" element={<BookDetail />} />
          <Route path="/map" element={<Map />} />
          <Route
            path="/signin"
            element={<SignIn onSignIn={() => setIsSignedIn(true)} />}
          />
          <Route
            path="/signout"
            element={<SignOut onSignOut={() => setIsSignedIn(false)} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

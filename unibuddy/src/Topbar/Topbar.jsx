import "./topbar.css";
import React, { useState, useEffect } from "react";
import "firebase/auth";
import "firebase/firestore";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db, firestore, auth } from "../Firebase/Firebase";
import { Link, Navigate } from "react-router-dom";

function Topbar() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setAuthenticated(true);
          fetchImage(user);
        } else {
          setAuthenticated(false);
          setLoading(false);
        }
      });

      return () => unsubscribe();
    };

    checkAuthStatus();
  }, []);

  const fetchImage = async (user) => {
    const userUID = user.uid;
    const imageCollection = collection(firestore, "users");
    const imageQuery = query(imageCollection, where("userUID", "==", userUID));
    try {
      const imageSnapshot = await getDocs(imageQuery);

      if (imageSnapshot.docs.length > 0) {
        const imageData = imageSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(imageData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  // if (loading) {
  //   return (
  //     <div className="topbar-container">
  //       <div className="topbar-left">
  //         <span className="topbar-logo">
  // <Link to="/home" className="topbar-logo">
  //   <a>UniBuddy</a>
  // </Link>
  //         </span>
  //       </div>
  //       <div className="topbar-center">
  //         <div className="search-bar">
  //           <Search className="search-icon" />
  //           <input placeholder="Search..." className="search-input" />
  //         </div>
  //       </div>
  //       <div className="topbar-right">
  // <Link to="/home" className="topbar-link">
  //   HomePage
  // </Link>
  //         <span className="topbar-link">Timeline</span>
  //         <div className="topbar-icons">
  //           <div className="topbar-icon-item">
  //             <Person></Person>
  //             <span className="topbar-icon-bage">1</span>
  //           </div>
  //           <div className="topbar-icon-item">
  //             <Chat></Chat>
  //             <span className="topbar-icon-bage">2</span>
  //           </div>
  //           <div className="topbar-icon-item">
  //             <Notifications></Notifications>
  //             <span className="topbar-icon-bage">1</span>
  //           </div>
  //         </div>
  //         {users.map((user) => {
  //           if (user.image != null) {
  //             return (
  //               <div key={user.id} className="topbar-img">
  //                 <img src={user.image} alt="User" className="topbar-img" />
  //                 <div className="tooltip">
  //                   <p>
  //                     Full name: {user.name} {user.surname}
  //                   </p>
  //                   <p>Phone: {user.phone}</p>
  //                 </div>
  //               </div>
  //             );
  //           }
  //           return null;
  //         })}
  //       </div>
  //     </div>
  //   );
  // }

  // if (!authenticated) {
  //   return <Navigate to="/signin" />;
  // }

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="topbar-logo">
          <Link to="/home" className="topbar-logo">
            <a>UniBuddy</a>
          </Link>
        </span>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search className="search-icon" />
          <input placeholder="Search..." className="search-input" />
        </div>
      </div>
      <div className="topbar-right">
        <Link to="/home" className="topbar-link">
          HomePage
        </Link>
        <span className="topbar-link">Timeline</span>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Link to="/profile">
              <Person></Person>
              {/* <span className="topbar-icon-bage">1</span>{" "} */}
            </Link>
          </div>
          <div className="topbar-icon-item">
            <Chat></Chat>
            {/* <span className="topbar-icon-bage">2</span> */}
          </div>
          <div className="topbar-icon-item">
            <Notifications></Notifications>
            {/* <span className="topbar-icon-bage">1</span> */}
          </div>
        </div>
        {users.map((user) => {
          if (user.image != null) {
            return (
              <div key={user.id} className="topbar-img">
                <img src={user.image} alt="User" className="topbar-img" />
                <div className="tooltip">
                  <p>
                    Full name: {user.name} {user.surname}
                  </p>
                  <p>Phone: {user.phone}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Topbar;

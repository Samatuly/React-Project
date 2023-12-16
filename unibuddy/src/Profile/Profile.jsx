// import React from "react";
// import "./Profile.css";

// const Profile = (props) => {
//   return (
//     <div className="wrapper">
//       <div className="user-photo">
//         <img src="https://picsum.photos/200/200"></img>
//         <h2>John Doe</h2>
//       </div>

//       <div className="information"></div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import "firebase/auth";
import "firebase/firestore";
import { collection, getDocs, where, query } from "firebase/firestore";
import {firestore, auth } from "../Firebase/Firebase";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
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
  }

  return (
    <div className="profile-wrapper">
      {users.map((user) => {
          if (user.image != null) {
            return (
              <div key={user.id} className="">
                <img src={user.image} alt="User" className="profile-user-image" />
                <div className="profile-grid-wrapper">
                  <div className="profile-user-info">
                    <div className="profile-name-title">First Name: </div>
                    <div className="profile-name">{user.name}</div>
                  </div>
                  <div className="profile-user-info">
                    <div className="profile-name-title">Last Name: </div>
                    <div className="profile-name">{user.surname}</div>
                  </div>
                  <div className="profile-user-faculty">
                    <div className="profile-faculty-title">Faculty: </div>
                    <div className="profile-faculty-name">{user.faculty}</div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
};

export default Profile;

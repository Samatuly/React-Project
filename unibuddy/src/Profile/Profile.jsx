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

import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div>
        <img
          src="https://static.thenounproject.com/png/4046839-200.png"
          className="profile-user-image"
        ></img>
      </div>
      <div className="profile-grid-wrapper">
        <div className="profile-user-info">
          <div className="profile-name-title">First Name: </div>
          <div className="profile-name">Madi</div>
        </div>
        <div className="profile-user-info">
          <div className="profile-name-title">Last Name: </div>
          <div className="profile-name">Mussabekov</div>
        </div>
        <div className="profile-user-faculty">
          <div className="profile-faculty-title">Faculty: </div>
          <div className="profile-faculty-name">
            School Of Information Technology
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

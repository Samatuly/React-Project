import React from "react";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="wrapper">
      <div className="user-photo">
        <img src="https://picsum.photos/200/200"></img>
        <h2>John Doe</h2>
      </div>

      <div className="information"></div>
    </div>
  );
};

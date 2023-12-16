import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/Firebase";
import { ZoomOutMap } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./rightbar.css";

function RightBar() {
  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    const fetchOrganisations = async () => {
      const organisationCollection = collection(firestore, "organisations");
      const organisationSnapshot = await getDocs(organisationCollection);
      const organisationData = organisationSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrganisations(organisationData);
    };

    fetchOrganisations();
  }, []);

  return (
    <div className="rightBar-container">
      <div className="rightBar-wrapper">
        <div className="rightBar-top">
          <div className="organization-container">
            <div className="organization-top">
              <span className="organizations-text">Organizations</span>
            </div>

            <ul className="organizations-list">
              {organisations.slice(0, 3).map((org) => {
                if (org.logo != null) {
                  return (
                    <li key={org.id}>
                      <img className="organizations-img" src={org.logo} alt={org.name} />
                      {org.name}
                    </li>
                  );
                }
                return null;
              })}
            </ul>

            <button
              className="organizations-button"
              onClick={() => {
                window.location.pathname = "organizations";
              }}
            >
              View all
            </button>
          </div>
        </div>
        <div className="rightBar-bottom">
          <div className="schedule-container">
            <div className="schedule-top">
              <span className="schedule-text">Schedule for today!</span>
              <Link to="/schedule">
                <ZoomOutMap></ZoomOutMap>
                <span className="topbar-icon-bage">1</span>{" "}
              </Link>
            </div>
            <hr />
            <Link to="/schedule">
              <img
                className="schedule-image"
                src="https://marketplace.canva.com/EAFN8syLrEw/1/0/900w/canva-gray-and-brown-minimalist-schedule-today-instagram-story-oJoSA9xf8NI.jpg"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightBar;

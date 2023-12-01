import React from "react";
import "./ratings.css";
import { Link } from "react-router-dom";

function Faculty() {
  return (
    <div className="faculty">
      <div className="faculty-grid">
        <Link className="link" to="/professors">
          <div className="faculty-item">
            <h4>School of Mathematics and Cybernetics</h4>
          </div>
        </Link>
        <Link className="link" to="/professors">
          <div className="faculty-item">
            <h4>School of Information Technology and Engineering</h4>
          </div>
        </Link>
        <Link className="link" to="/professors">
          <div className="faculty-item">
            <h4>Business School</h4>
          </div>
        </Link>
        <Link className="link" to="/professors">
          <div className="faculty-item">
            <h4>Kazakhstan Maritime Academy</h4>
          </div>
        </Link>
        <Link className="link" to="/professors">
          <div className="faculty-item">
            <h4>International School of Economics</h4>
          </div>
        </Link>
        <Link className="link" to="/professors">
          <div className="faculty-item">
            <h4>School of Chemical Engineering</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Faculty;

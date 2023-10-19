import React from "react";
import './ratings.css'
import { Link } from "react-router-dom";

function Faculty(){
    return(
        <div className='faculty'>
            <div className="faculty-grid">
                <div className="faculty-item">
                    <Link className="link" to = "/professors">
                        <h4>School of Mathematics and Cybernetics</h4>
                    </Link>
                </div>
                <div className="faculty-item">
                    <Link className="link" to = "/professors">
                        <h4>School of Information Technology and Engineering</h4>
                    </Link>
                </div>
                <div className="faculty-item">
                    <Link className="link" to = "/professors">
                        <h4>Business School</h4>
                    </Link>
                </div>
                <div className="faculty-item">
                    <Link className="link" to = "/professors">
                        <h4>Kazakhstan Maritime Academy</h4>
                    </Link>
                </div>
                <div className="faculty-item">
                    <Link className="link" to = "/professors">
                        <h4>International School of Economics</h4>
                    </Link>
                </div>
                <div className="faculty-item">
                    <Link className="link" to = "/professors">
                        <h4>School of Chemical Engineering</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Faculty
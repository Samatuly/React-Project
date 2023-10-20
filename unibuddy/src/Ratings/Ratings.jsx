import React, { useState } from "react";
import "./ratings.css";
import { FaStar } from "react-icons/fa";

function Ratings(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="faculty-professors">
      <div className="professors">
        <img className="faculty-image" src={props?.faculty?.img} />
        <div className="faculty-info">
          <h2>{props?.faculty?.name}</h2>
          <h4>
            <em>{props.faculty?.subject}</em>
          </h4>
          <div className="faculty-stars">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="stars"
                    color={
                      currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  ></FaStar>
                </label>
              );
            })}
            <p>Professors rating is {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ratings;

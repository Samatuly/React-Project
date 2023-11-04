import React, { useState } from "react";
import "./slider.css";
import {
  Favorite,
  MoreVert,
  Person,
  ThumbDown,
  ThumbUp,
} from "@mui/icons-material";
import { Users } from "../Data";

function Slider({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className="post-1">
        <div className="post-wrapper">
          <div className="post-top">
            <div className="post-top-left">
              <Person />
              <span className="post-user-name">
                {Users.filter((u) => u.id === post.userId)[0].username}
              </span>
              <span className="post-date">
                {" "}
                <p>{post.date}</p>
              </span>
            </div>
            <div className="post-top-right">
              <MoreVert />
            </div>
          </div>
          <div className="post-center">
            <span className="post-text">
              <h1>
                <strong>{post.header}</strong>
              </h1>
              <img className="post-image" src={post.photo} />
              <span>{post.desc}</span>
            </span>
          </div>
          <div className="post-bottom">
            <div className="post-bottom-left">
              <ThumbUp onClick={likeHandler} htmlColor="#135489" />
              <Favorite
                className="like-button"
                onClick={likeHandler}
                htmlColor="#EB5077"
              ></Favorite>
              <span className="post-like-counter">
                {post.like} people like it
              </span>
            </div>
            <div className="post-bottom-right">
              <span className="post-comment">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
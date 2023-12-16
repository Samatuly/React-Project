import React, {useState} from "react";
import './slider.css'
import {Favorite, MoreVert, Person} from "@mui/icons-material";
import {Users, Posts} from "../Share/Data";

function Slider({post}){
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedPost, setEditedPost] = useState({ ...post });

    const likeHandler = () =>{
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }

    const handleEdit = () => {
        setIsEditing(false);
    };

    return(
        <>
            {isEditing ? (
                <div >
                    <input
                        type="text"
                        value={editedPost.header}
                        onChange={(e) => setEditedPost({ ...editedPost, header: e.target.value })}
                    />
                    <textarea
                        value={editedPost.desc}
                        onChange={(e) => setEditedPost({ ...editedPost, desc: e.target.value })}
                    />
                    <button onClick={handleEdit}>Save</button>
                </div>
            ) : (
            <div className="post-1">
                <div className="post-wrapper">
                    <div className="post-top">
                        <div className="post-top-left">
                            <Person/>
                            <span className="post-user-name">
                            {Users.filter(u => u.id === post.userId)[0].username}
                        </span>
                            <span className="post-date"> <p>{post.date}</p></span>
                        </div>
                        <div className="post-top-right">
                            <MoreVert onClick={() => setIsEditing(true)} />
                        </div>
                    </div>
                    <div className="post-center">
                    <span className="post-text">
                        <h1><strong>{editedPost.header}</strong></h1>
                        <img className="post-image" src={editedPost.photo} />
                        <span>{editedPost.desc}</span>
                    </span>
                    </div>
                    <div className="post-bottom">
                        <div className="post-bottom-left">
                            <Favorite className={"like-button " + (isLiked ? "liked" : "")} onClick={likeHandler}></Favorite>
                            <span className="post-like-counter">{like} people like it</span>
                        </div>
                        <div className="post-bottom-right">
                            <span className="post-comment">{post.comment} comments</span>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}
export default Slider;

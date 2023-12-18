import React, { useState } from "react";
import "./slider.css";
import { Favorite, MoreVert, Person, Send } from "@mui/icons-material";

function Slider({ post, username }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentLiked, setCommentIsLiked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState({ ...post });
  const [comment, setComment] = useState(post.comment);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleEdit = () => {
    setIsEditing(false);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const handleToggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  const handleLikeComment = (index) => {
    const updatedComments = [...comments];
    if (updatedComments[index].likes < 1) {
      updatedComments[index].likes += 1;
    } else {
      updatedComments[index].likes -= 1;
    }
    setCommentIsLiked(!isCommentLiked);
    setComments(updatedComments);
  };

  const handleAddComment = () => {
    setComments([...comments, { text: newComment, likes: 0 }]);
    setNewComment('');
    setComment(comment + 1);
  };

  const Comment = ({ comment, onLike, onReply, showForm, onFormChange, onFormSubmit }) => {
    return (
      <li>
        <div className="comment-former">
          {comment.text}{'         '}
          <div>
            <Favorite className={"like-button " + (isCommentLiked ? "liked" : "")} onClick={onLike}></Favorite>
            <button className="comment-reply" onClick={onReply}><Send/></button>
          </div>
        </div>
        {showForm && (
          <div>
            <textarea
              rows="3"
              cols="50"
              value={comment.text}
              onChange={onFormChange}
              placeholder="Add a reply..."
            ></textarea>
            <br />
            <button onClick={onFormSubmit}>Add Reply</button>
          </div>
        )}
      </li>
    );
  };

  return (
    <>
      {isEditing ? (
        <div>
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
                <Person />
                <span className="post-user-name">{username}</span>
                <span className="post-date">
                  <p>{post.status}</p>
                </span>
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
                <span className="post-comment">
                  <button onClick={handleToggleCommentForm}>{comment} comments</button>
                </span>
                {showCommentForm && (
                  <div className="post-comment-bottom">
                    <textarea
                      rows="3"
                      cols="50"
                      value={newComment}
                      onChange={handleCommentChange}
                      placeholder="Add a comment..."
                    ></textarea>
                    <br />
                    <button className='comment-button' onClick={handleAddComment}>Add Comment</button>
                  </div>
                )}
                <ul className="comment-form">
                  {comments.map((comment, index) => (
                    <Comment
                      key={index}
                      comment={comment}
                      onLike={() => handleLikeComment(index)}
                      onReply={() => handleToggleCommentForm(index)}
                      showForm={showCommentForm === index}
                      onFormChange={handleCommentChange}
                      onFormSubmit={handleAddComment}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Slider;
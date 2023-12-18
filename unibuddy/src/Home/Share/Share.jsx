import React, { useState } from "react";
import "./share.css";
import Slider from "../Slider/Slider";
import { Posts } from "./Data";
import {
  EmojiEmotions,
  Label,
  PermMedia,
  Room,
  Telegram,
} from "@mui/icons-material";
function Share({ searchTerm }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const [newPost, setNewPost] = useState({
    id: Posts.length + 1,
    userId: 1,
    header: "",
    desc: "",
    photo: "",
    date: "",
    like: 0,
    comment: 0,
  });

  const handleAddPost = () => {
    if (newPost.desc.trim() !== "") {
      Posts.push({
        ...newPost,
        date: new Date().toLocaleDateString(),
      });
      setNewPost({
        id: Posts.length + 1,
        userId: 1,
        header: "",
        desc: "",
        photo: "",
        date: "",
        like: 0,
        comment: 0,
      });
      setImageUrl("");
      setIsFormOpen(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };
  const loadNewImage = () => {
    const newImageUrl =
      "https://pivkomarket.kz/wp-content/uploads/2020/06/akcija-31-picca.jpg";
    setImageUrl(newImageUrl);
    setNewPost((prevPost) => ({
      ...prevPost,
      photo: newImageUrl,
    }));
  };

  const handleContentButtonClick = (content) => {
    setNewPost((prevPost) => ({
      ...prevPost,
      desc: `${prevPost.desc} ${content}`,
    }));
  };

  const handleNewsContainerClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const filteredPosts = Posts.filter((p) => {
    const lowerCaseHeader = p.header.toLowerCase();
    const lowerCaseDesc = p.desc.toLowerCase();
    const lowerCaseSearchTerm = searchTerm ? searchTerm.toLowerCase() : "";

    return (
      lowerCaseHeader.includes(lowerCaseSearchTerm) ||
      lowerCaseDesc.includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="news-container">
          <div className="news-wrapper">
            <div className="news-top">
              <h1>HomePage</h1>
            </div>
            <div className="news-bottom">
              <div className="news-options">
                <button className="news-button" onClick={loadNewImage}>
                  <PermMedia className="news-icon" />
                </button>
                <button
                  className="news-button"
                  onClick={() => handleContentButtonClick("Label")}
                >
                  <Label className="news-icon" />
                </button>
                <button
                  className="news-button"
                  onClick={() => handleContentButtonClick("📍")}
                >
                  <Room className="news-icon" />
                </button>
                <button
                  className="news-button"
                  onClick={() => handleContentButtonClick("😊")}
                >
                  <EmojiEmotions className="news-icon" />
                </button>
              </div>
              <button className="news-button">
                <Telegram />
              </button>
              {isFormOpen && (
                <div>
                  <button className="news-button-save" onClick={handleAddPost}>
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="post" onClick={handleNewsContainerClick}>
            <div className="post-form">
              <input
                className="post-header"
                type="text"
                placeholder="Post Header"
                name="header"
                value={newPost.header}
                onChange={handleInputChange}
              />
              <input
                className="post-desc"
                placeholder="Post Description"
                name="desc"
                value={newPost.desc}
                onChange={handleInputChange}
              />
              {imageUrl && <img src={imageUrl} alt="Dynamic Image" />}
            </div>
          </div>
        </div>
        {filteredPosts.map((p) => (
          <Slider key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
export default Share;

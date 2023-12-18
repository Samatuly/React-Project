import React, { useState, useEffect } from 'react';
import './share.css';
import Slider from '../Slider/Slider';
import { EmojiEmotions, Label, PermMedia, Room, Telegram } from '@mui/icons-material';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { firestore } from '../../Firebase/Firebase';

function Share() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [newPost, setNewPost] = useState({
    userId: 1,
    header: '',
    desc: '',
    photo: '',
    date: '',
    like: 0,
    comment: 0,
  });

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollection = collection(firestore, 'news');
        const newsSnapshot = await getDocs(newsCollection);
        const newsData = newsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    };

    fetchNews();
  }, []);

  const handleAddPost = async () => {
    if (newPost.desc.trim() !== '') {
      const newsCollection = collection(firestore, 'news');
      const newNewsItem = {
        ...newPost,
        date: new Date().toLocaleDateString(),
      };
      await addDoc(newsCollection, newNewsItem);
      setNewPost({
        userId: 1,
        header: '',
        desc: '',
        photo: '',
        date: '',
        like: 0,
        comment: 0,
      });
      setImageUrl('');
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
      'https://pivkomarket.kz/wp-content/uploads/2020/06/akcija-31-picca.jpg';
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
                  onClick={() => handleContentButtonClick('Label')}
                >
                  <Label className="news-icon" />
                </button>
                <button
                  className="news-button"
                  onClick={() => handleContentButtonClick('📍')}
                >
                  <Room className="news-icon" />
                </button>
                <button
                  className="news-button"
                  onClick={() => handleContentButtonClick('😊')}
                >
                  <EmojiEmotions className="news-icon" />
                </button>
              </div>
              <button className="news-button">
                <Telegram />
              </button>
              {isFormOpen && (
                <div>
                  <button
                    className="news-button-save"
                    onClick={handleAddPost}
                  >
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
        {news.map((p) => (
          <Slider key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Share;
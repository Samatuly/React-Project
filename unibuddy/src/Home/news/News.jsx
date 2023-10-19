import React from "react";
import "./news.css";
import {EmojiEmotions, Label, PermMedia, Person, Room, Share, Telegram} from '@mui/icons-material';

function News(){
    return(
        <>
            <div className="news-container">
                <div className="news-wrapper">
                    <div className="news-top">
                        <h1>HomePage</h1>
                    </div>
                    <div className="news-bottom">
                        <div className="news-options">
                            <button className="news-button"><PermMedia className="news-icon"/></button>
                                <button className="news-button"><Label className="news-icon"/></button>
                                    <button className="news-button"><Room className="news-icon"/></button>
                                        <button className="news-button"><EmojiEmotions className="news-icon"/></button>
                        </div>
                        <button className="news-button"><Telegram/></button>
      
//                         <Person/>
//                         <input placeholder="What's in your mind? " className="news-input"/>
//                     </div>
//                     <hr className="news-hr"/>
//                     <div className="news-bottom">
//                         <div className="news-options">
//                             <PermMedia className="news-icon"/>
//                             <Label className="news-icon"/>
//                             <Room className="news-icon"/>
//                             <EmojiEmotions className="news-icon"/>
//                         </div>
//                         <button className="news-button"><Telegram/>Share</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default News;
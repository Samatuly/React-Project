import React from 'react';
import './share.css'
import News from "../news/News";
import Slider from "../Slider/Slider";
import {Posts} from "../Data"
function Share(){
    return(
        <div className="share">
            <div className="share-wrapper">
                <News/>
                {Posts.map((p) => (
                    <Slider key={p.id} post = {p}></Slider>
                ))}
            </div>
        </div>
    )
}
export default Share;
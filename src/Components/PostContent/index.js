import React from 'react';
import './PostContent.css';

const PostContent = (props) => {
   const imageData = require(`../../Images/${props.cardData.image}`);
   return (
    <div className = "Post-content">
        <div className= "Image-panel" style={{backgroundImage: `url(${imageData})`}}>
        </div>
        <article className="Post-text">
            <div> 
                <span className = "Date-posted">
                    {props.cardData.date}
                </span>
                <span className="Reading-time">            
                    {props.cardData.readingTime}
                </span>
            </div>
            <label>
                {props.cardData.title}
            </label>
            <p>
                {props.cardData.description}
            </p>
        </article>
    </div>
   )
}
export default PostContent;

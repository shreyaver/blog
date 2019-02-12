import React from 'react';
import './PostReaction.css'

const PostReaction = (props) => {
    let likeButton;
    if (props.liked === true) {
        likeButton = <button className="Liked-heart-icon" />;
    } else {
        likeButton = <button className="Heart-icon" />;
    }
    return (
        <div className = "Post-reaction">
            <hr/>
            <span>
                <button className="Clap-icon"></button>
                {props.claps}
                {likeButton}            
            </span>
        </div>
    )
}
export default PostReaction;
import React from 'react';
import './PostReaction.css'

const PostReaction = (props) => {
    let likeButton;
    if (props.liked === true) {
        likeButton = <button className="Liked-heart-icon" onClick = {props.onLike} />;
    } else {
        likeButton = <button className="Heart-icon" onClick = {props.onLike} />;
    }
    return (
        <div className = "Post-reaction">
            <hr/>
            <span>
                <button className="Clap-icon" onClick = {props.onClap}></button>
                {props.claps}
                {likeButton}            
            </span>
        </div>
    )
}
export default PostReaction;
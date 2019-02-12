import React, { Component } from 'react';
import PostContent from '../PostContent/PostContent.Component.js';
import PostReaction from '../PostReaction/PostReaction.Component.js';
import './BlogPost.Component.css'

class BlogPost extends Component {
    state = {
        liked: this.props.cardData.liked,
        claps: this.props.cardData.claps,
    }
    handleLike = () => {
        this.setState((state) => ({
            liked: !state.liked
        }));
    }
    handleClap = () => {
        this.setState((state) => ({
            claps: state.claps+1
        }));
    }
    render() {
        return (
           <div className = "Blog-post">
            <PostContent cardData={this.props.cardData} />
            <PostReaction claps={this.state.claps} liked={this.state.liked} onLike={this.handleLike}  onClap={this.handleClap}/>
           </div>
        )
    }
}
export default BlogPost;

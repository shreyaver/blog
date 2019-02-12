import React, { Component } from 'react';
import PostContent from '../PostContent';
import PostReaction from '../PostReaction';
import './BlogPost.css'

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
    render() {
        return (
           <div className = "Blog-post">
            <PostContent cardData={this.props.cardData} />
            <PostReaction claps={this.state.claps} liked={this.state.liked} onLike={this.handleLike} />
           </div>
        )
    }
}
export default BlogPost;

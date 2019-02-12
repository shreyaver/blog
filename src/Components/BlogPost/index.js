import React, { Component } from 'react';
import PostContent from '../PostContent';
import PostReaction from '../PostReaction';
import './BlogPost.css'

class BlogPost extends Component {
    render() {
        return (
           <div className = "Blog-post">
            <PostContent cardData={this.props.cardData} />
            <PostReaction claps={this.props.cardData.claps} liked={this.props.cardData.liked} />
           </div>
        )
    }
}
export default BlogPost;

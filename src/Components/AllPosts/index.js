import React from 'react';
import BlogPost from '../BlogPost';
import './AllPosts.css';

const AllPosts = (props) => {
    const posts = [];
    props.cardDataArr.forEach(cardData => {
       posts.push(<BlogPost cardData={cardData} key={cardData.title}/>); 
    });
    return (
        <div className = 'All-posts'>
            {posts}
        </div>
    )
}
export default AllPosts;
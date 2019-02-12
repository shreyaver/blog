import React from 'react';
import './CreatePost.css';
import Header from '../Header';
import Button from '../Button';
import Footer from '../Footer';
import PostForm from '../PostForm';

const CreatePost = (props) => {
  return (
    <div className = "CreatePost">
      <Header />
      <PostForm />
      <Footer />
    </div>
  );
}

export default CreatePost;

import React from 'react';
import './CreatePost.Component.css';
import Header from '../Header/Header.Component.js';
import Footer from '../Footer/Footer.Component';
import PostForm from '../PostForm/PostForm.Component.js';

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

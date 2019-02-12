import React from 'react';
import './App.css';
import AllPosts from '../AllPosts';
import Header from '../Header';
import Button from '../Button';
import Footer from '../Footer';

const App = (props) => {
  return (
    <div className = "App">
      <Header />
      <AllPosts cardDataArr = {props.cardDataArr}/>
      <div className="Button-div">
        <Button type="button" caption = "CREATE POST" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
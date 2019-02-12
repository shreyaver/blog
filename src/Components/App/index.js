import React, { Component } from 'react';
import './App.css';
import AllPosts from '../AllPosts';
import Header from '../Header';
import Button from '../Button';
import Footer from '../Footer';
import getRequest from '../../Helpers/Request/request.js';

class App extends Component {
  state = {
    cardDataArr: []
  }
  componentDidMount() {
    getRequest('https://api.myjson.com/bins/hc5ye').then((cardDataArr) => {
      this.setState({ cardDataArr: cardDataArr.data});
    });
  }
  render() {
    return (
      <div className = "App">
        <Header />
        <AllPosts cardDataArr = {this.state.cardDataArr}/>
        <div className="Button-div">
          <Button type="button" caption = "CREATE POST" onClick={() => window.location.href="/post"}/> 
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

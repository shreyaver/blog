import React, { Component } from 'react';
import './App.Component.css';
import AllPosts from '../AllPosts/AllPosts.Component';
import Header from '../Header/Header.Component';
import Button from '../Button/Button.Component';
import Footer from '../Footer/Footer.Component';
import getRequest from '../../Helpers/Request/request.js';
import LoadingPage from '../LoadingPage/LoadingPage.Component.js';

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
    if (this.state.cardDataArr.length === 0) {
      return (<LoadingPage />);
    } else {
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
}

export default App;

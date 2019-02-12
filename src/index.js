import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './Components/App';
import CreatePost from './Components/CreatePost';
import cardDataArr from './mockData';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" render={() => (<App cardDataArr = {cardDataArr}/>)}/>
    <Route exact path="/post" component = {CreatePost}/>
  </div>
</Router>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

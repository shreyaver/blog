import React, { Component } from 'react';
import App from '../App';
import CreatePost from '../CreatePost';
import NotFoundPage from '../NotFoundPage';
import cardDataArr from '../../mockData';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const AllRoutes = (props) =>{
    return (
    <Router>
    <div>
        <Route exact path="/" render={() => (<App cardDataArr = {cardDataArr}/>)}/>
        <Route exact path="/post" component = {CreatePost}/>
        <Route component = {NotFoundPage}/>
    </div>
    </Router>
    )
};
export default AllRoutes;
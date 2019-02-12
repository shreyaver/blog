import React from 'react';
import App from '../App/App.Component.js';
import CreatePost from '../CreatePost/CreatePost.Component.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.Component.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const AllRoutes = (props) =>{
    return (
    <Router>
        <Switch>
            <Route exact path="/" component = {App}/>
            <Route exact path="/post" component = {CreatePost}/>
            <Route component = {NotFoundPage}/>
        </Switch>
    </Router>
    )
};
export default AllRoutes;
import React from 'react';
import App from '../App';
import CreatePost from '../CreatePost';
import NotFoundPage from '../NotFoundPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const AllRoutes = (props) =>{
    return (
    <Router>
        <Switch>
            <Route exact path="/" component = {App}/>
            <Route path="/post" component = {CreatePost}/>
            <Route component = {NotFoundPage}/>
        </Switch>
    </Router>
    )
};
export default AllRoutes;
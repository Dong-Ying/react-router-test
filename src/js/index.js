import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'

const App = require('./app');
const Home = require('./home');
const About = require('./about');
const Inbox = require('./inbox');
const Message = require('./message');
const InboxStats = require('./inbox-stats');
const NoMatch = require('./no-match');

document.addEventListener('DOMContentLoaded', function () {
    render(
        (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="about" component={About}/>
                    <Route path="inbox" component={Inbox}>
                        <IndexRoute component={InboxStats}/>
                        <Route path="/messages/:id" component={Message}/>
                        <Redirect from="messages/:id" to="/messages/:id"/>
                    </Route>
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        ),
        document.getElementById("router")
    );
});



'use strict';

var App = require('./App');
var Dashboard = require('./Dashboard');
var Project = require('./Project');

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var AppStore = require('../model/Store');

AppStore.addProject('test');

var content = document.getElementById('content');

var Routes = (
  <Route handler={App}>
    <Route name="/" handler={Dashboard}/>
    <Route name="/project/:name?/:sprint?" handler={Project} />
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});

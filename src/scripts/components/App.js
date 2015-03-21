'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var {RouteHandler} = require('react-router');
var {Navbar} = require('react-bootstrap');

// CSS
require('../../styles/main.less');

var imageURL = require('../../images/yeoman.png');

var App = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Navbar brand="RunnerUp" />
        <div className="container container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;

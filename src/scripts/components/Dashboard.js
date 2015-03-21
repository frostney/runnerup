'use strict';

var React = require('react/addons');
var {Button} = require('react-bootstrap');

require('styles/Dashboard.less');

var Dashboard = React.createClass({
  render: function () {
    return (
        <div>
          <Button>New project</Button>
        </div>
      );
  }
});

module.exports = Dashboard;


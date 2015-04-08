'use strict';

var React = require('react/addons');
var {Button} = require('react-bootstrap');
import ProjectList from './ProjectList';

require('styles/Dashboard.less');

var Dashboard = React.createClass({
  render: function () {
    return (
        <div>
          <ProjectList />
          <Button>New project</Button>
        </div>
      );
  }
});

module.exports = Dashboard;


'use strict';

var React = require('react/addons');
import AppStore from '../model/Store';

require('styles/ProjectList.less');

var ProjectList = React.createClass({
  render: function () {
    const projectNames = Object.keys(AppStore.projects);

    const list = projectNames.map(function(name) {
      return <li>{name}</li>;
    });

    return (
        <div>{list}</div>
      );
  }
});

module.exports = ProjectList;


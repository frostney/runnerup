'use strict';

var React = require('react/addons');

var {Button} = require('react-bootstrap');

require('styles/SprintList.less');

var SprintList = React.createClass({
  render: function () {
    return (
        <div>
          <Button>New Sprint</Button>
        </div>
      );
  }
});

module.exports = SprintList;


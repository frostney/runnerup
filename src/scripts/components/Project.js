'use strict';

var React = require('react/addons');
const {Grid, Row, Col} = require('react-bootstrap');

var SprintList = require('./SprintList');
var SprintBoard = require('./SprintBoard');

require('styles/Project.less');

var Project = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    const {name, sprint} = this.context.router.getCurrentParams();

    return (
      <div>
        <h1>{name}</h1>
        <Grid>
          <Row>
            <Col xs={6} md={4}><SprintList /></Col>
            <Col xs={12} md={8}><SprintBoard /></Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = Project;


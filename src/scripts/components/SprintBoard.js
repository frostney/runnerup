'use strict';

var React = require('react/addons');
var {Grid, Row, Col, Button} = require('react-bootstrap');

require('styles/SprintBoard.less');

var SprintBoard = React.createClass({
  render: function () {
    return (
        <div class="content-fluid">
          <Grid>
            <Row>
              <Col md={4}><h3>ToDo</h3><Button>New user story</Button></Col>
              <Col md={4}><h3>Doing</h3></Col>
              <Col md={4}><h3>Done</h3></Col>
            </Row>
          </Grid>
        </div>
      );
  }
});

module.exports = SprintBoard;


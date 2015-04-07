'use strict';

describe('SprintBoard', function () {
  var React = require('react/addons');
  var SprintBoard, component;

  beforeEach(function () {
    SprintBoard = require('components/SprintBoard.js');
    component = React.createElement(SprintBoard);
  });

  it('should create a new instance of SprintBoard', function () {
    expect(component).toBeDefined();
  });
});

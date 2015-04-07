'use strict';

describe('SprintList', function () {
  var React = require('react/addons');
  var SprintList, component;

  beforeEach(function () {
    SprintList = require('components/SprintList.js');
    component = React.createElement(SprintList);
  });

  it('should create a new instance of SprintList', function () {
    expect(component).toBeDefined();
  });
});

'use strict';

describe('Project', function () {
  var React = require('react/addons');
  var Project, component;

  beforeEach(function () {
    Project = require('components/Project.js');
    component = React.createElement(Project);
  });

  it('should create a new instance of Project', function () {
    expect(component).toBeDefined();
  });
});

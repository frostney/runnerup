'use strict';

describe('ProjectList', function () {
  var React = require('react/addons');
  var ProjectList, component;

  beforeEach(function () {
    ProjectList = require('components/ProjectList.js');
    component = React.createElement(ProjectList);
  });

  it('should create a new instance of ProjectList', function () {
    expect(component).toBeDefined();
  });
});

'use strict';

import Project from './Project';

// This is called Store. There is no Flux model here (yet)
var Store = {
  projects: {}
};

Store.addProject = function(name) {
  Store.projects[name] = new Project();
};

export default Store;

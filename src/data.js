class Task {
  constructor({name, description}) {
    this.name = name;
    this.description = description;
    
    this.subtasks = [];
  }
}

class Sptint {
  constructor() {
    this.tasks = [];
  }
  createTask(descriptor) {
    
  }
}

class Project {
  constructor() {
    this.sprints = [];
  }
}

var AppData = {
  projects: []
};

export default AppData;
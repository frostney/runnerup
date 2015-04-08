import Sprint from './Sprint';

class Project {
  constructor({name, description}) {
    this.name = name;
    this.description = description;

    this.sprints = [];
  }

  addSprint() {
    this.sprints.push(new Sprint());
  }
}

export default Project;

class Task {
  constructor({name, description}) {
    this.name = name;
    this.description = description;

    this.subtasks = [];
  }
}

export default Task;
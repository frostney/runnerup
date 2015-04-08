class Task {
  constructor({name, description}) {
    this.name = name;
    this.description = description;

    this.subtasks = [];
  }

  addTask() {
    this.subtasks.push(new Task(arguments));
  }
}

export default Task;

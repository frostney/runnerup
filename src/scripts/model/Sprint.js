import Task from './Task';

class Sprint {
  constructor() {
    this.tasks = [];
  }
  createTask(descriptor) {
    this.tasks.push(new Task(descriptor));
  }
}

export default Sprint;

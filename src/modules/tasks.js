"use strict";

const titleInput = document.querySelector("#title");

class Task {
  constructor(title, dueDate, notes, priority, status, checklist, project) {
    this.title = title;
    this.dueDate = dueDate;
    this.notes = notes;
    this.priority = priority;
    this.status = status;
    this.checklist = [checklist];
    this.project = project;
  }
}

function createTask() {
  const newTask = new Task(titleInput.value);
  console.log(newTask);
}

// export { createTask };

/*
Tasks = {
    name: ,
    due date:,
    Notes: ,
    Priority: ,
    Status: ,
    Checklist: ,
    Project: ,

}
*/

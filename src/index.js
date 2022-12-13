import "./style.css";
// import { createTask } from "./modules/tasks.js";

let taskList = [];

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", createTask);

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
  const newTask = new Task(
    titleInput.value,
    dueDate.value,
    notes.value,
    priority.value,
    status.value
  );
  console.log(newTask);
  taskList.push(newTask);
  console.log(taskList);
}

/*
Projects = {
    name: ,
    due date:,
    Notes: ,
    Priority: ,
    Status: ,
    Checklist: ,

}
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

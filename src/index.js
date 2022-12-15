import "./style.css";
// import { createTask } from "./modules/tasks.js";

let taskList = [];
let projectList = [];

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", createTask);

const titleInput = document.querySelector("#title");

class Task {
  constructor(
    title,
    dueDate,
    notes,
    project,
    checklist = [],
    priority = false
  ) {
    this.title = title;
    this.dueDate = dueDate;
    this.notes = notes;
    this.project = project;
    this.checklist = [checklist];
    // this.priority = priority;
  }
}

function clearFields() {
  titleInput.value = dueDate.value = notes.value = project.value = "";
}

function createTask() {
  const newTask = new Task(
    titleInput.value,
    dueDate.value,
    notes.value,
    project.value
  );
  const html = `<option value="${newTask.project}">`;
  taskList.push(newTask);
  projectList.push(newTask.project);
  document
    .querySelector("#projects-list")
    .insertAdjacentHTML("beforeend", html);
  clearFields();
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

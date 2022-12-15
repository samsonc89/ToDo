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
    priority
    // checklist = [],
  ) {
    this.title = title;
    this.dueDate = dueDate;
    this.notes = notes;
    this.project = project;
    this.priority = priority.checked ? true : false;
    // this.checklist = [checklist];
  }
}

function clearFields() {
  titleInput.value = dueDate.value = notes.value = project.value = "";
  priority.checked = false;
}

function createTask() {
  const newTask = new Task(
    titleInput.value,
    dueDate.value,
    notes.value,
    project.value,
    priority
  );
  const html = `<option value="${newTask.project}">`;
  taskList.push(newTask);
  projectList.push(newTask.project);
  document
    .querySelector("#projects-list")
    .insertAdjacentHTML("beforeend", html);
  clearFields();
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

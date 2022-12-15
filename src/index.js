import "./style.css";
import { updateTasksUI } from "./modules/interface.js";
// import { createTask } from "./modules/tasks.js";

let taskList = [];
let projectsList = [];

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

function addProjectOption(project) {
  const html = `<option value="${project}">`;
  document
    .querySelector("#projects-list")
    .insertAdjacentHTML("beforeend", html);
}

function createTask() {
  const newTask = new Task(
    titleInput.value,
    dueDate.value,
    notes.value,
    project.value,
    priority
  );
  taskList.push(newTask);
  projectsList.push(newTask.project);
  addProjectOption(newTask.project);
  clearFields();
  console.log(taskList, projectsList);
  updateTasksUI(taskList.at(-1));
}

export { taskList, projectsList };
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

import "./style.css";
import {
  updateTasksUI,
  updateProjectsUI,
  checkTask,
  expandCard,
} from "./modules/interface.js";
// import { createTask } from "./modules/tasks.js";
let task1 = {
  title: "Test1",
  dueDate: "",
  notes: "",
  project: "",
  priority: false,
};
let task2 = {
  title: "Testing 2",
  dueDate: "",
  notes: "",
  project: "",
  priority: false,
};
let taskList = [task1, task2];
let projectsList = [];

taskList.forEach((task) => {
  updateTasksUI(task);
});

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", () => {
  if (project.value === "") {
    createTask();
  } else createProject();
});

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
    "Inbox",
    priority
  );
  taskList.push(newTask);
  clearFields();
  console.log(taskList, projectsList);
  updateTasksUI(taskList.at(-1));
}

function createProject() {
  const newTask = new Task(
    titleInput.value,
    dueDate.value,
    notes.value,
    project.value,
    priority
  );
  projectsList.push(newTask);
  addProjectOption(newTask.project);
  clearFields();
  console.log(taskList, projectsList);
  updateProjectsUI(projectsList.at(-1));
}
window.checkTask = checkTask;
window.expandCard = expandCard;

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

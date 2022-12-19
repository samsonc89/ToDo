import "./style.css";
import {
  updateTasksUI,
  updateProjectsList,
  checkTask,
  expandCard,
  switchProjectView,
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

//element selectors
const addTaskBtn = document.querySelector("#add-task-btn");
const addProjectBtn = document.querySelector("#add-project-btn");
const titleInput = document.querySelector("#title");
const projectTitleInput = document.querySelector("#project-title");

addTaskBtn.addEventListener("click", createTask);
addProjectBtn.addEventListener("click", createProject);

class Task {
  constructor(title, dueDate, notes, project, priority, checklist) {
    this.title = title;
    this.dueDate = dueDate;
    this.notes = notes === undefined ? "" : notes;
    this.project = project === "Tasks" ? "Inbox" : project;
    this.priority = priority.checked ? true : false;
    this.checklist = [];
  }
}

class Project extends Task {}

function clearFields() {
  titleInput.value = dueDate.value = notes.value = "";
  priority.checked = false;
}

function createTask() {
  const newTask = new Task(
    titleInput.value,
    dueDate.value,
    notes.value,
    `${document.querySelector(".tasks-display > h2").textContent}`,
    priority
  );
  taskList.push(newTask);
  clearFields();
  console.log(taskList, projectsList);
  updateTasksUI(taskList.at(-1));
}

function createProject() {
  const newProject = new Project(
    projectTitleInput.value,
    dueDate.value,
    notes.value,
    projectTitleInput.value,
    priority
  );
  projectsList.push(newProject);
  switchProjectView(newProject);
  clearFields();
  console.log(taskList, projectsList);
  updateProjectsList(projectsList.at(-1));
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

import "./style.css";
import {
  updateTasksUI,
  updateProjectsList,
  checkTask,
  expandCard,
  newProjectView,
} from "./modules/interface.js";
// import { createTask } from "./modules/tasks.js";

let project1 = {
  title: "Test1",
  dueDate: "",
  notes: "",
  project: "",
  priority: false,
  checklist: [],
};
let project2 = {
  title: "Testing 2",
  dueDate: "",
  notes: "",
  project: "",
  priority: false,
  checklist: [
    {
      title: "Project task 1",
      dueDate: "",
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
    },

    {
      title: "Project task 2",
      dueDate: "",
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
    },
  ],
};
let taskList = [];
const projectsList = [
  {
    title: "Inbox",
    dueDate: "",
    notes: "",
    project: "Inbox",
    priority: false,
    checklist: [],
  },
  project1,
  project2,
];

projectsList.slice(1).forEach((task) => {
  updateProjectsList(task);
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
    this.project = project === "Inbox" ? "Inbox" : project;
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
  let currentProjectName = document.querySelector(
    ".tasks-display > h2"
  ).textContent;
  const newTask = new Task(
    titleInput.value,
    dueDate.value,
    notes.value,
    currentProjectName,
    priority
  );

  // if (currentProjectName !== "Inbox") {
  const found = projectsList.find(
    (project) => project.title === currentProjectName
  );
  found.checklist.push(newTask);
  updateTasksUI(found.checklist.at(-1));
  // } else {
  //   taskList.push(newTask);
  //   updateTasksUI(taskList.at(-1));
  // }
  clearFields();
  console.log(taskList, projectsList);
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
  newProjectView(newProject);
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

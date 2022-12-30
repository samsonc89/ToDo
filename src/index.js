import "./style.css";
import {
  updateTasksUI,
  updateProjectsList,
  checkTask,
  expandCard,
  newProjectView,
  switchToTodayView,
  createNewTaskCard,
  taskCards,
  selectCard,
} from "./modules/interface.js";
import moment from "moment";

// import { createTask } from "./modules/tasks.js";

let project1 = {
  title: "Test1",
  dueDate: "",
  notes: "",
  project: "",
  completed: false,
  tasks: [],
  id: 45678,
};
let project3 = {
  title: "Project 3",
  dueDate: "",
  notes: "",
  project: "",
  completed: false,
  id: 12345,
  tasks: [
    {
      title: "Project 3 task 1",
      dueDate: Date.parse("2022-12-01"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      id: 341273,
    },

    {
      title: "Project 3 task 2",
      dueDate: Date.parse("2022-12-11"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      completed: true,
      id: 341231,
    },
  ],
};
let project2 = {
  title: "Testing 2",
  dueDate: "",
  notes: "",
  project: "",
  priority: false,
  tasks: [
    {
      title: "Project 2 task 1",
      dueDate: Date.parse("2022-12-01"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      id: 947571,
    },

    {
      title: "Project 2 task 2",
      dueDate: Date.parse("2022-12-11"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      completed: true,
      id: 834656,
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
    tasks: [
      {
        title: "Inbox task 1",
        dueDate: Date.parse("2022-11-11"),
        notes: "",
        project: "project 2",
        priority: false,
        checklist: [],
        completed: true,
        id: 86544,
      },
      {
        title: "Inbox task 2",
        dueDate: Date.parse("2022-10-11"),
        notes: "",
        project: "project 2",
        priority: false,
        checklist: [],
        id: 657838,
      },
    ],
  },
  project1,
  project2,
  project3,
];

// projectsList.slice(1).forEach((task) => {
//   updateProjectsList(task);
// });
console.log(projectsList);
switchToTodayView();

// for (let task of taskCards) {
//   task.addEventListener("click", selectCard);
// }

//element selectors
const addProjectBtn = document.querySelector("#add-project-btn");
const projectTitleInput = document.querySelector("#project-title");

// addTaskBtn.addEventListener("click", createTask);
// addProjectBtn.addEventListener("click", createProject);

class Project {
  constructor(title) {
    this.title = title === "" ? "New Project" : title;
    this.dueDate = Date.parse(dueDate);
    this.notes = "";
    this.tasks = [];
    this.completed = false;
    this.id = generateID();
  }
  markComplete() {
    checkTask(this);
    this.completed = this.completed === false ? true : false;
  }
}

class Task {
  constructor(id, project) {
    this.title = "";
    this.dueDate = "";
    this.notes = "";
    this.project = project === "Inbox" ? "Inbox" : project;
    this.priority = false;
    this.checklist = [];
    this.completed = false;
    this.id = id;
  }
  markComplete() {
    this.completed = this.completed === false ? true : false;
  }
  set newTitle(text) {
    this.title = text;
  }
  set newDueDate(text) {
    let splitDate = text.split("-");
    let newDate = splitDate.push(splitDate.shift());
    newDate = splitDate.join("-");

    this.dueDate = newDate;
  }
}

function generateID() {
  //create random 6 digit "id"
  let randomID = Math.floor(1000000 + Math.random() * 9000000);
  //search myLibrary for object that has property value with same id
  while (flattenProjects(projectsList).some((obj) => obj.id === randomID)) {
    console.log(randomID);
    randomID = Math.floor(1000000 + Math.random() * 9000000);
    console.log("repeated");
  }
  return randomID;
}

function createTask(id) {
  let currentView = document.querySelector(".tasks-display > h2").textContent;
  let currentProjectName =
    currentView === "Today"
      ? "Inbox"
      : document.querySelector(".tasks-display > h2").textContent;

  const newTask = new Task(id, currentProjectName);

  const found = projectsList.find(
    (project) => project.title === currentProjectName
  );
  found.tasks.push(newTask);
  console.log(found.tasks);
  console.log(projectsList);
}

function createProject() {
  const newProject = new Project(projectTitleInput.value);
  projectsList.push(newProject);
  clearFields();
  console.log(taskList, projectsList);
  updateProjectsList(projectsList.at(-1));
  newProjectView(newProject);
}

function flattenProjects(array) {
  let flattenedArray = [];
  array.forEach((object) => {
    flattenedArray.push(object);
    if (Array.isArray(object.tasks)) {
      flattenedArray = flattenedArray.concat(flattenProjects(object.tasks));
    }
  });
  return flattenedArray;
}

function findProjectByID(id) {
  let object = flattenProjects(projectsList).find(
    (projects) => projects.id == id
  );
  return object;
}

function addDueDate() {
  const foundObject = findProjectByID(event.target.closest(".task-card").id);
  console.log(foundObject);
  event.target.classList.add("hidden");
  event.target.previousSibling.classList.remove("hidden");

  // event.target.previousSibling.showPicker();
}

function changeTitle(obj) {
  obj.newTitle = document.querySelector(
    ".expanded>div>.task-title-input"
  )?.value;
}
function changeNotes(obj) {
  obj.notes = document.querySelector(".expanded>div>.task-notes")?.value;
}

function changeDueDate(obj) {
  if (
    document.querySelector(".expanded")?.querySelector(".due-date-picker")
      .value !== ""
  ) {
    obj.newDueDate = document
      .querySelector(".expanded")
      ?.querySelector(".due-date-picker").value;
    let targetElem = obj.id;
    document
      .getElementById(targetElem)
      .querySelector(".due-date-display").textContent =
      "Due: " + moment(obj.dueDate, "MM-DD-YYYY").format("MM/DD/YYYY");
  }
}

function updateObject() {
  const targetObject = findProjectByID(document.querySelector(".expanded")?.id);
  if (document.querySelector(".expanded>div>.task-title-input")?.value != "") {
    changeTitle(targetObject);
  }
  changeNotes(targetObject);
  changeDueDate(targetObject);
  console.log(targetObject);
}
//event listeners
document.querySelector("#new-task-btn").addEventListener("click", () => {
  let newObject = createNewTaskCard();
  document.querySelector(".expanded>div>.task-title-input").focus();
  console.log(newObject);
  createTask(newObject);
});

window.checkTask = checkTask;
window.expandCard = expandCard;
window.projectsList = projectsList;

export {
  taskList,
  projectsList,
  flattenProjects,
  generateID,
  updateObject,
  findProjectByID,
  addDueDate,
};
/*
Projects = {
    name: ,
    due date:,
    Notes: ,
    Priority: ,
    Status: ,
    tasks: ,

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

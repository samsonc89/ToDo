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
  createProjectCard,
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
  notes: "Hello",
  project: "",
  completed: false,
  id: 12345,
  tasks: [
    {
      title: "Project 3 task 1",
      dueDate: "2022-12-01",
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      completed: false,
      id: 341273,
    },

    {
      title: "Project 3 task 2",
      dueDate: "2022-12-11",
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
      dueDate: "2022-12-01",
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      completed: false,
      id: 947571,
    },

    {
      title: "Project 2 task 2",
      dueDate: "2022-12-11",
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      completed: true,
      id: 834656,
    },
  ],
};
let completedList = [
  {
    title: "Completed",
    tasks: [],
  },
];
let deletedList = [
  {
    title: "Deleted",
    tasks: [],
  },
];
const projectsList = [
  {
    title: "Inbox",
    dueDate: "",
    notes: "",
    project: "Inbox",
    tasks: [
      {
        title: "Inbox task 1",
        dueDate: "2022-11-11",
        notes: "",
        project: "project 2",
        priority: false,
        checklist: [],
        completed: true,
        id: 86544,
      },
      {
        title: "Inbox task 2",
        dueDate: "2022-10-11",
        notes: "",
        project: "project 2",
        priority: false,
        checklist: [],
        completed: false,
        id: 657838,
      },
    ],
  },
  project1,
  project2,
  project3,
];

projectsList.slice(1).forEach((task) => {
  updateProjectsList(task);
});
console.log(projectsList);
switchToTodayView();

// for (let task of taskCards) {
//   task.addEventListener("click", selectCard);
// }

//element selectors
const newAreaBtn = document.querySelector("#new-area-btn");
const projectTitleInput = document.querySelector("#project-title");

function checkNewProjectName() {
  const projectTitle = document.querySelector("h2.project-title");
  if (projectTitle.textContent == "") {
    alert("Project Name Cannot be Blank");
    projectTitle.focus();
    document.querySelector(".sidebar").style.pointerEvents = "none";
  } else {
    if (
      flattenProjects(projectsList).some(
        (obj) => obj.title === projectTitle.textContent
      )
    ) {
      alert(
        "Project title already exists. Please use a different project title"
      );
      projectTitle.focus();
      selectText(projectTitle);
    } else {
      updateNewProjectTitle();
    }
  }
}

function selectText(elem) {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(elem);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(elem);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn("Could not select text in node: Unsupported browser.");
  }
}

function updateNewProjectTitle() {
  document.querySelector("h3.project-title.selected-project").textContent =
    projectsList.at(-1).newTitle =
      document.querySelector("h2.project-title").textContent;
  document.querySelector(".sidebar").style.pointerEvents = "all";
  window.removeEventListener("click", checkNewProjectName);
}

newAreaBtn.addEventListener("click", () => {
  createProject();
  document.querySelector("h2.project-title").focus();

  setTimeout(
    function () {
      window.addEventListener("click", checkNewProjectName);
    },

    10
  );
});

class Project {
  constructor() {
    this.title = "";
    this.dueDate = "";
    this.notes = "";
    this.tasks = [];
    this.completed = false;
    this.id = generateID();
  }
  markComplete() {
    checkTask(this);
    this.completed = this.completed === false ? true : false;
  }

  set newTitle(text) {
    this.title = text.trim();
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
    this.completedDate = "";
  }
  markComplete() {
    this.completed = this.completed === false ? true : false;
  }

  set setCompletedDate(date) {
    this.completedDate = date;
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
  let currentProjectName = currentView === "Today" ? "Inbox" : currentView;

  const newTask = new Task(id, currentProjectName);

  const found = projectsList.find(
    (project) => project.title === currentProjectName
  );
  if (currentView === "Today") {
    newTask.dueDate = moment().format("MM-DD-YYYY");
  }
  found.tasks.push(newTask);
  console.log(found.tasks);
  console.log(projectsList);
}

function createProject() {
  createProjectCard();
  const newProject = new Project();
  projectsList.push(newProject);

  console.log(projectsList);
  newProjectView();
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

function findProjectByID(id, projects) {
  let object = flattenProjects(projects).find((project) => project.id == id);
  return object;
}

//task button functions

function addPriority() {
  let targetCard = event.target.closest(".task-card").firstChild;
  let html = `<div class='priority-mark'>🔴</div>`;
  const foundObject = findProjectByID(
    event.target.closest(".task-card").id,
    projectsList
  );
  foundObject.priority = foundObject.priority === false ? true : false;
  if (foundObject.priority === true) {
    targetCard.insertAdjacentHTML("afterbegin", html);
  } else {
    let priorityNode = targetCard.querySelector(".priority-mark");
    targetCard.removeChild(priorityNode);
  }
}

//functions to update tasks
function changeTaskTitle(obj) {
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
  const targetObject = findProjectByID(
    document.querySelector(".expanded")?.id,
    projectsList
  );
  if (targetObject) {
    if (
      document.querySelector(".expanded>div>.task-title-input")?.value != ""
    ) {
      changeTaskTitle(targetObject);
    }

    changeNotes(targetObject);

    changeDueDate(targetObject);
    console.log(targetObject);
  }
}
//event listeners
document.querySelector("#new-task-btn").addEventListener("click", () => {
  const currentView = document.querySelector(".tasks-display > h2");
  if (
    currentView.textContent !== "Completed" &&
    currentView.textContent !== "Trash"
  ) {
    //createNewTaskCard returns a new/existing ID
    let newObject = createNewTaskCard();
    document.querySelector(".expanded>div>.task-title-input").focus();
    createTask(newObject);
  }
});

window.checkTask = checkTask;
window.expandCard = expandCard;
window.projectsList = projectsList;

export {
  projectsList,
  completedList,
  deletedList,
  flattenProjects,
  generateID,
  updateObject,
  findProjectByID,
  addPriority,
};

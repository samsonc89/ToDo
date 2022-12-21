import "./style.css";
import {
  updateTasksUI,
  updateProjectsList,
  checkTask,
  expandCard,
  newProjectView,
  selectProject,
  switchToTodayView,
} from "./modules/interface.js";
// import { createTask } from "./modules/tasks.js";

let project1 = {
  title: "Test1",
  dueDate: "",
  notes: "",
  project: "",
  priority: false,
  tasks: [],
};
let project3 = {
  title: "Project 3",
  dueDate: "",
  notes: "",
  project: "",
  priority: false,
  tasks: [
    {
      title: "Project 3 task 1",
      dueDate: Date.parse("2022-12-01"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
    },

    {
      title: "Project 3 task 2",
      dueDate: Date.parse("2022-12-11"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      completed: true,
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
    },

    {
      title: "Project 2 task 2",
      dueDate: Date.parse("2022-12-11"),
      notes: "",
      project: "project 2",
      priority: false,
      checklist: [],
      completed: true,
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
    tasks: [
      {
        title: "Inbox task 1",
        dueDate: Date.parse("2022-11-11"),
        notes: "",
        project: "project 2",
        priority: false,
        checklist: [],
        completed: true,
      },
      {
        title: "Inbox task 2",
        dueDate: Date.parse("2022-10-11"),
        notes: "",
        project: "project 2",
        priority: false,
        checklist: [],
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
//element selectors
const addTaskBtn = document.querySelector("#add-task-btn");
const addProjectBtn = document.querySelector("#add-project-btn");
const titleInput = document.querySelector("#title");
const projectTitleInput = document.querySelector("#project-title");

addTaskBtn.addEventListener("click", createTask);
addProjectBtn.addEventListener("click", createProject);

class Project {
  constructor(title, dueDate, notes, project, tasks, completed) {
    this.title = title === "" ? "New Project" : title;
    this.dueDate = Date.parse(dueDate);
    this.notes = notes === undefined ? "" : notes;
    this.tasks = [];
    this.completed = false;
  }
}

class Task extends Project {
  constructor(title, dueDate, notes, project, priority, checklist, completed) {
    super();
    this.title = title;
    this.dueDate = Date.parse(dueDate);
    this.notes = notes === undefined ? "" : notes;
    this.project = project === "Inbox" ? "Inbox" : project;
    this.priority = priority.checked ? true : false;
    this.checklist = [];
    this.completed = false;
    delete this.tasks;
  }
}

function clearFields() {
  titleInput.value = dueDate.value = notes.value = "";
  priority.checked = false;
}

function createTask() {
  let currentProjectName =
    document.querySelector(".tasks-display > h2").textContent == "Today"
      ? "Inbox"
      : document.querySelector(".tasks-display > h2").textContent;
  const newTask = new Task(
    titleInput.value,
    dueDate.value,
    notes.value,
    currentProjectName,
    priority
  );

  // if (currentProjectName == "Today") {
  const found = projectsList.find(
    (project) => project.title === currentProjectName
  );
  found.tasks.push(newTask);
  updateTasksUI(found.tasks.at(-1));
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
    projectTitleInput.value
  );
  projectsList.push(newProject);
  newProjectView(newProject);
  clearFields();
  console.log(taskList, projectsList);
  updateProjectsList(projectsList.at(-1));
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

window.checkTask = checkTask;
window.expandCard = expandCard;

export { taskList, projectsList, flattenProjects };
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

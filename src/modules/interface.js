import { projectsList, flattenProjects, generateID } from "..";

const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");
const projectTitle = document.querySelector(".project-title");
const sidebar = document.querySelector(".sidebar");
const taskCards = document.getElementsByClassName("task-card");
const taskTitles = document.getElementsByClassName("task-title-input");

//task functions
function updateTasksUI(task) {
  const html = `<div class="task-card" ondblclick="expandCard()" id='${task.id}' >
  <div class='task-title-wrapper'>
    <input type="checkbox" onchange="checkTask(this)" >
      
        <h3 class="task-title" contenteditable>${task.title}</h3>
  </div>
    <div class='task-details'>
    <p data-placeholder="Notes" contenteditable>${task.notes}</p>
    </div>
    </div>`;

  tasksDisplay.firstChild.insertAdjacentHTML("afterend", html);
}

function createTaskCard() {
  document.querySelector(".expanded")?.classList.remove("expanded");
  const newTaskCard = document.createElement("div");
  newTaskCard.classList.add("task-card", "expanded");
  newTaskCard.addEventListener("dblclick", expandCard);
  newTaskCard.id = generateID();

  const newTaskTitleWrapper = document.createElement("div");
  newTaskTitleWrapper.classList.add("task-title-wrapper");

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.onchange = checkTask(this);

  const taskTitleInput = document.createElement("input");
  taskTitleInput.type = "text";
  taskTitleInput.classList.add("task-title-input");
  taskTitleInput.placeholder = "New Task";
  taskTitleInput.addEventListener("focusout", () => {
    console.log("hello");
  });

  const taskDetails = document.createElement("div");
  taskDetails.classList.add("task-details");

  const notesInput = document.createElement("input");
  notesInput.type = "text";
  notesInput.classList.add("task-notes");
  notesInput.placeholder = "Notes";
  notesInput.addEventListener("focusout", () => {
    console.log("hello");
  });

  taskDetails.appendChild(notesInput);
  newTaskTitleWrapper.appendChild(taskCheckbox);
  newTaskTitleWrapper.appendChild(taskTitleInput);
  newTaskCard.appendChild(newTaskTitleWrapper);
  newTaskTitleWrapper.insertAdjacentElement("afterend", taskDetails);

  tasksDisplay.appendChild(newTaskCard);
}

/*
function createTaskCard() {
  document.querySelector(".expanded")?.classList.remove("expanded");
  const newCard = `<div class="task-card expanded" ondblclick="expandCard()" id='${generateID()}' >
  <div class='task-title-wrapper'>
    <input type="checkbox" onchange="checkTask(this)" >
      <input class='task-title-input' type='text' placeholder='New Task'>
  </div>
    <div class='task-details'>
    <p data-placeholder="Notes" contenteditable></p>
    </div>
    </div>`;

  projectTitle.insertAdjacentHTML("afterend", newCard);
  for (let titles of taskTitles) {
    titles.addEventListener("focusout", () => {
      console.log("hello", event.target);
    });
  }
}

*/

document
  .querySelector("#new-task-btn")
  .addEventListener("click", createTaskCard);

function checkTask(checkboxElem) {
  console.log(checkboxElem.closest(".task-card"));
  console.log(event.target);
  if (checkboxElem.checked) {
    event.target.parentElement.classList.add("done");
  } else {
    event.target.parentElement.classList.remove("done");
  }
}

function expandCard() {
  if (event.target.parentElement.classList.contains("task-card")) {
    event.target.parentElement.classList.add("expanded");
  }
}

//check if click is within closest task-card that is already expanded, if not remove expanded class from everything
function closeCard() {
  document.querySelector(".expanded").classList.remove("expanded");

  // expandedCard.classList.remove("expanded");
}

//project functions

//use appendchild so it's easier to set conditional for when project title is New
function updateProjectsList(project) {
  const newProjectCard = document.createElement("div");
  newProjectCard.classList.add("project-card");

  const newProjectTitle = document.createElement("h3");
  newProjectTitle.classList.add("project-title");
  newProjectTitle.textContent = `${project.title}`;
  if (project.title === "New Project") {
    newProjectTitle.classList.add("selected");
  }

  newProjectCard.appendChild(newProjectTitle);
  projectsDisplay.appendChild(newProjectCard);
}

function newProjectView(project) {
  clearSelectedProject();
  tasksDisplay.innerHTML = "";
  const html = `
  <h2 class='project-heading' contenteditable>${project.title}</h2> 
  `;
  projectsDisplay.lastChild.firstChild.classList.add("selected");
  tasksDisplay.insertAdjacentHTML("beforeend", html);
}

//switch views
function switchCurrentView() {
  let targetTitle = event.target.textContent;
  if (event.target.closest(".project-title")) {
    tasksDisplay.innerHTML = `<h2 class="project-title" contenteditable>${targetTitle}</h2>`;
    const found = projectsList.find((project) => project.title === targetTitle);
    found.tasks.forEach((task) => {
      updateTasksUI(task);
    });
  } else {
    tasksDisplay.innerHTML = `<h2 class="project-title">${targetTitle}</h2>`;
    if (event.target.closest("#completed-view")) {
      switchToCompletedView();
    } else if (event.target.closest("#today-view")) {
      switchToTodayView();
    } else {
      switchToInboxView();
    }
  }
}

function switchToTodayView() {
  const today = Date.now();
  //flatten our array and find projects that dueDate before today
  const projectsWithDates = flattenProjects(projectsList).filter(
    (projects) => projects.dueDate != "" && projects.dueDate < today
  );
  // const yesterday = new Date(2022 - 12 - 19);
  projectsWithDates.forEach((project) => {
    updateTasksUI(project);
  });
}

function switchToCompletedView() {
  const completedProjects = flattenProjects(projectsList).filter(
    (projects) => projects.completed === true
  );
  completedProjects.forEach((project) => updateTasksUI(project));
}

function switchToInboxView() {
  let inbox = projectsList.find((project) => project.title === "Inbox");
  inbox.tasks.forEach((task) => {
    updateTasksUI(task);
  });
}

function clearSelectedProject() {
  document.querySelector(".selected")?.classList.remove("selected");
}

function selectProject() {
  if (event.target.closest(".project-title") || event.target.closest(".view")) {
    clearSelectedProject();
    event.target.classList.add("selected");
    switchCurrentView();
  }
}

//event listeners
sidebar.addEventListener("click", selectProject);

window.addEventListener("click", (e) => {
  if (
    !e.target.closest(".task-card")?.classList.contains("expanded") &&
    e.target.id !== "new-task-btn"
  ) {
    document.querySelector(".expanded")?.classList.remove("expanded");
  }
});

export {
  updateTasksUI,
  updateProjectsList,
  checkTask,
  expandCard,
  tasksDisplay,
  newProjectView,
  selectProject,
  switchToTodayView,
};

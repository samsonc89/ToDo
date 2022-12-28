import {
  projectsList,
  flattenProjects,
  generateID,
  updateObject,
  findProjectByID,
} from "..";

const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");
const projectTitle = document.querySelector(".project-title");
const sidebar = document.querySelector(".sidebar");
const taskCards = document.getElementsByClassName("task-card");
const taskTitles = document.getElementsByClassName("task-title-input");

//task functions

function createNewTaskCard(task) {
  collapseCard();
  removeSelectedClass();
  const newTaskCard = document.createElement("div");

  newTaskCard.addEventListener("dblclick", expandCard);
  newTaskCard.addEventListener("click", selectCard);

  const newTaskTitleWrapper = document.createElement("div");
  newTaskTitleWrapper.classList.add("task-title-wrapper");

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.addEventListener("change", () => {
    checkTask();
  });

  const taskTitleInput = document.createElement("input");
  taskTitleInput.type = "text";
  taskTitleInput.classList.add("task-title-input");
  taskTitleInput.placeholder = "New Task";
  taskTitleInput.addEventListener("dblclick", expandCard);

  const taskDetails = document.createElement("div");
  taskDetails.classList.add("task-details");

  const notesInput = document.createElement("textarea");
  notesInput.classList.add("task-notes");
  notesInput.placeholder = "Notes";
  notesInput.setAttribute(
    "oninput",
    'this.style.height = "";this.style.height = this.scrollHeight + "px"'
  );

  const taskBtnWrapper = document.createElement("div");
  taskBtnWrapper.classList.add("task-btn-wrapper");

  const dueDateBtn = document.createElement("button");
  dueDateBtn.classList.add("task-btn", "due-date-btn");

  const priorityBtn = document.createElement("button");
  priorityBtn.classList.add("task-btn", "priority-btn");

  const checklistBtn = document.createElement("button");
  checklistBtn.classList.add("task-btn", "checklist-btn");

  taskBtnWrapper.appendChild(dueDateBtn);
  taskBtnWrapper.appendChild(checklistBtn);
  taskBtnWrapper.appendChild(priorityBtn);

  taskDetails.appendChild(notesInput);
  taskDetails.appendChild(taskBtnWrapper);
  newTaskTitleWrapper.appendChild(taskCheckbox);
  newTaskTitleWrapper.appendChild(taskTitleInput);
  newTaskCard.appendChild(newTaskTitleWrapper);
  newTaskTitleWrapper.insertAdjacentElement("afterend", taskDetails);

  if (task === undefined) {
    //additional classes
    newTaskCard.classList.add("task-card", "expanded", "new-card");
    //additional id generator
    newTaskCard.id = generateID();
  } else {
    newTaskCard.classList.add("task-card");
    newTaskCard.id = `${task.id}`;
    //set title
    taskTitleInput.value = `${task.title}`;
    taskTitleInput.setAttribute("readonly", "readonly");
    //set notes
    notesInput.value = `${task.notes}`;
  }

  tasksDisplay.appendChild(newTaskCard);

  return newTaskCard.id;
}

function checkTask() {
  const foundObject = findProjectByID(event.target.closest(".task-card").id);
  if (event.target.checked) {
    foundObject.completed = foundObject.completed === false ? true : false;
    event.target.parentElement.classList.add("done");
    console.log(foundObject);
  } else {
    event.target.parentElement.classList.remove("done");
    foundObject.completed = foundObject.completed === false ? true : false;
    console.log(foundObject);
  }
}

function collapseCard() {
  document
    .querySelector(".expanded>div>.task-title-input")
    ?.setAttribute("readonly", "readonly");

  updateObject();
  document.querySelector(".expanded")?.classList.remove("expanded");
}

function expandCard() {
  document
    .querySelector(".task-title-input.selected-card")
    ?.removeAttribute("readonly");
  event.target.closest(".task-card").classList.add("expanded");
  // }
}
function removeSelectedClass() {
  document
    .querySelectorAll(".selected-card")
    .forEach((card) => card.classList.remove("selected-card"));
}

function selectCard() {
  if (event.target.closest(".task-card")) {
    removeSelectedClass();
    event.target.closest(".task-card").classList.add("selected-card");
    event.target
      .closest(".task-card")
      .firstChild.classList.add("selected-card");
    event.target
      .closest(".task-card")
      .firstChild.firstChild.nextSibling.classList.add("selected-card");
  }
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
    createNewTaskCard(project);
  });
}

function switchToCompletedView() {
  const completedProjects = flattenProjects(projectsList).filter(
    (projects) => projects.completed === true
  );
  completedProjects.forEach((project) => createNewTaskCard(project));
}

function switchToInboxView() {
  let inbox = projectsList.find((project) => project.title === "Inbox");
  inbox.tasks.forEach((task) => {
    createNewTaskCard(task);
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

//collapse card and remove new-card class when clicking out of expanded card
window.addEventListener("click", () => {
  if (document.querySelectorAll(".expanded").length != 0) {
    if (
      !event.target.closest(".task-card")?.classList.contains("expanded") &&
      event.target.id !== "new-task-btn"
    ) {
      collapseCard();
      document.querySelector(".new-card")?.classList.remove("new-card");
    }
  }
});

export {
  updateProjectsList,
  checkTask,
  expandCard,
  tasksDisplay,
  newProjectView,
  selectProject,
  switchToTodayView,
  createNewTaskCard,
  taskCards,
  selectCard,
};

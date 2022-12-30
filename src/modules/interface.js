import {
  projectsList,
  completedList,
  deletedList,
  flattenProjects,
  generateID,
  updateObject,
  findProjectByID,
  addPriority,
} from "..";
import moment from "moment";

const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");
const projectTitle = document.querySelector(".project-title");
const sidebar = document.querySelector(".sidebar");
const taskCards = document.getElementsByClassName("task-card");
const taskTitles = document.getElementsByClassName("task-title-input");

//task functions

function createNewTaskCard(task) {
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

  const dueDateDisplay = document.createElement("div");
  dueDateDisplay.classList.add("due-date-display");

  const dueDatePicker = document.createElement("input");
  dueDatePicker.classList.add("due-date-picker", "task-btn");
  dueDatePicker.type = "date";

  const priorityBtn = document.createElement("button");
  priorityBtn.classList.add("task-btn", "priority-btn");
  priorityBtn.addEventListener("click", addPriority);

  const checklistBtn = document.createElement("button");
  checklistBtn.classList.add("task-btn", "checklist-btn");

  taskBtnWrapper.appendChild(dueDatePicker);
  taskBtnWrapper.appendChild(checklistBtn);
  taskBtnWrapper.appendChild(priorityBtn);

  taskDetails.appendChild(notesInput);
  taskDetails.appendChild(taskBtnWrapper);
  newTaskTitleWrapper.appendChild(taskCheckbox);
  newTaskTitleWrapper.appendChild(taskTitleInput);
  newTaskTitleWrapper.appendChild(dueDateDisplay);
  newTaskCard.appendChild(newTaskTitleWrapper);
  newTaskTitleWrapper.insertAdjacentElement("afterend", taskDetails);

  if (task === undefined) {
    collapseCard();
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

    if (task.dueDate !== "") {
      let taskDate = new Date(task.dueDate);
      dueDateDisplay.textContent =
        "Due: " + moment(taskDate).format("MM/DD/YYYY");
    }

    let html = `<div class='priority-mark'>🔴</div>`;
    if (task.priority === true) {
      newTaskTitleWrapper.insertAdjacentHTML("afterbegin", html);
    }
  }

  tasksDisplay.appendChild(newTaskCard);

  return newTaskCard.id;
}

function moveTask(startingProject, task, endingProject) {
  task.completed = task.completed === false ? true : false;
  startingProject.forEach((project) => {
    if (project.tasks.includes(task)) {
      //add the completed object into the completed array
      endingProject.tasks.push(task);

      //remove the completed object from the original array
      let index = project.tasks.indexOf(task);
      project.tasks.splice(index, 1);
    }
  });
}

function checkTask() {
  if (event.target.checked) {
    const foundObject = findProjectByID(
      event.target.closest(".task-card").id,
      projectsList
    );
    console.log(foundObject);
    foundObject.setCompletedDate = moment([]).format("MM-DD-YYYY");
    event.target.parentElement.classList.add("done");

    //go through the projects list and find project that has the task of the foundObject.
    moveTask(projectsList, foundObject, completedList[0]);
    console.log(foundObject, completedList);
  } else {
    const foundObject = findProjectByID(
      event.target.closest(".task-card").id,
      completedList
    );
    event.target.parentElement.classList.remove("done");
    // foundObject.completed = foundObject.completed === false ? true : false;
    let currentView =
      document.querySelector(".tasks-display > h2").textContent === "Today"
        ? "Inbox"
        : document.querySelector(".tasks-display > h2").textContent;
    let currentProjectName = projectsList.find(
      (project) => project.title === currentView
    );
    moveTask(completedList, foundObject, currentProjectName);
  }
}

function collapseCard() {
  if (!!document.querySelector(".expanded")) {
    document
      .querySelector(".expanded>div>.task-title-input")
      ?.setAttribute("readonly", "readonly");

    updateObject();
    //select only if shown

    document.querySelector(".expanded")?.classList.remove("expanded");
  }
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
      createNewTaskCard(task);
    });
  } else {
    tasksDisplay.innerHTML = `<h2 class="project-title">${targetTitle}</h2>`;
    if (event.target.closest("#completed-view")) {
      switchToCompletedView();
    } else if (event.target.closest("#today-view")) {
      switchToTodayView();
    } else if (event.target.closest("#trash-view")) {
      switchToTrashView();
    } else {
      switchToInboxView();
    }
  }
}

function switchToTodayView() {
  const today = Date.now();
  //flatten our array and find projects that dueDate before today
  const projectsWithDates = flattenProjects(projectsList).filter(
    (project) =>
      project.completed === false &&
      project.dueDate != "" &&
      Date.parse(project.dueDate) < today
  );
  // const yesterday = new Date(2022 - 12 - 19);
  projectsWithDates.forEach((project) => {
    createNewTaskCard(project);
  });
}

function switchToCompletedView() {
  const completedProjects = flattenProjects(completedList).filter(
    (projects) => projects.completed === true
  );
  completedProjects.forEach((project) => {
    createNewTaskCard(project);
    document.querySelector("input[type='checkbox']").remove();
  });
}

function switchToTrashView() {
  deletedList[0].tasks.forEach((task) => {
    createNewTaskCard(task);
    document.querySelector("input[type='checkbox']").remove();
  });
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

window.addEventListener("click", () => {
  if (!event.target.closest(".task-card.selected-card")) {
    removeSelectedClass();
  }
});

window.addEventListener("keydown", (e) => {
  const selectedCard = document.querySelector(".task-card.selected-card");
  const key = e.key; // const {key} = event; ES6+
  if (key === "Backspace" && selectedCard) {
    const foundObject = findProjectByID(selectedCard.id, projectsList);
    moveTask(projectsList, foundObject, deletedList[0]);
    selectedCard.remove();
    console.log(foundObject);
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

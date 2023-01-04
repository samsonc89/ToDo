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

  newTaskCard.addEventListener("mousedown", (e) => {
    if (e.detail > 1) {
      e.preventDefault();
      expandCard();
    }
  });
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
  // taskTitleInput.addEventListener("dblclick", expandCard);

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
    .querySelector(".selected-card>div>.task-title-input")
    ?.removeAttribute("readonly");
  console.log(event.target);
  event.target.closest(".task-card").classList.add("expanded");
  document.querySelector(".expanded>div>.task-title-input").focus();
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

function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  projectCard.id = project.id;

  const projectTitle = document.createElement("h3");
  projectTitle.classList.add("project-title");
  projectTitle.setAttribute("contenteditable", false);
  projectTitle.setAttribute("data-text", "New Project");

  projectCard.appendChild(projectTitle);

  projectsDisplay.appendChild(projectCard);
}

//use appendchild so it's easier to set conditional for when project title is New
function updateProjectsList(project) {
  const newProjectCard = document.createElement("div");
  newProjectCard.classList.add("project-card");
  newProjectCard.id = project.id;

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
  <div class="project-title-container">
  <div class="round">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox"></label>
  </div>
  <h2 class='project-title' contenteditable='true' data-text='New Project' '></h2> 
  </div>
  <p class='project-notes' contenteditable='false' data-text='Notes'></p>
  `;
  projectsDisplay.lastChild.firstChild.classList.add("selected-project");
  tasksDisplay.insertAdjacentHTML("beforeend", html);
}

//switch views
function switchCurrentView() {
  let targetTitle = event.target.textContent;
  if (event.target.closest(".project-title")) {
    const found = projectsList.find((project) => project.title === targetTitle);
    tasksDisplay.innerHTML = `
    <div class="project-title-container">
    <div class="round">
      <input type="checkbox" id="checkbox" />
      <label for="checkbox"></label>
    </div>
    <h2 class="project-title" contenteditable '>${targetTitle}</h2>
    </div>
    <p class='project-notes' contenteditable='true' data-text='Notes'>${
      found.notes == undefined ? "" : found.notes
    }</p>`;
    found.tasks.forEach((task) => {
      createNewTaskCard(task);
    });
  } else {
    tasksDisplay.innerHTML = `
    <div class="project-title-container">
    <h2 class="project-title">${targetTitle}</h2>
    </div>`;
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
  document
    .querySelector(".selected-project")
    ?.classList.remove("selected-project");
}

function selectProject() {
  if (event.target.closest(".project-title") || event.target.closest(".view")) {
    clearSelectedProject();
    event.target.classList.add("selected-project");
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

window.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    document
      .querySelector(".project-notes")
      .setAttribute("contenteditable", true);
  } else {
    document
      .querySelector(".project-notes")
      ?.setAttribute("contenteditable", false);
  }
});

window.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Backspace" && document.querySelector(".expanded")) {
    return;
  }
  const selectedCard = document.querySelector(".task-card.selected-card");
  if (key === "Backspace" && selectedCard) {
    const foundObject = findProjectByID(selectedCard.id, projectsList);
    moveTask(projectsList, foundObject, deletedList[0]);
    selectedCard.remove();
    console.log(foundObject);
  }
});

window.addEventListener("keydown", (e) => {
  const key = e.key;
  const expandedCard = document.querySelector(".expanded");
  if (key === "Enter" && expandedCard) {
    collapseCard();
  } else {
    const selectedCard = document.querySelector(".task-card.selected-card");
    if (key === "Enter" && selectedCard) {
      expandCard();
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
  createProjectCard,
};

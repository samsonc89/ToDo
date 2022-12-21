import { projectsList, flattenProjects } from "..";

const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");
const sidebar = document.querySelector(".sidebar");

const taskCards = document.getElementsByClassName("task-card");

//task functions
function updateTasksUI(task) {
  const html = `<div class="task-card" ondblclick="expandCard()" >
  <div class='task-title'>
    <input type="checkbox" onchange="checkTask(this)" >
      
        <h3 class="" contenteditable>${task.title}</h3>
  </div>
    <div class='task-details'>
    <p data-placeholder="Notes" contenteditable>${task.notes}</p>
    </div>
    </div>`;

  tasksDisplay.insertAdjacentHTML("beforeend", html);
}

function checkTask(checkboxElem) {
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
  if (!event.target.closest(".task-card")?.classList.contains("expanded")) {
    for (let card of taskCards) {
      card.classList.remove("expanded");
    }
  }
}

//project functions

//use appendchild so it's easier to set conditional for when project title is New
function updateProjectsList(project) {
  clearSelectedProject();
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
  tasksDisplay.innerHTML = "";
  const html = `
  <h2 class='project-heading' contenteditable>${project.title}</h2> 
  `;
  projectsDisplay.lastChild.firstChild.classList.add("selected");
  tasksDisplay.insertAdjacentHTML("beforeend", html);
}

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

window.addEventListener("click", () => {
  closeCard();
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

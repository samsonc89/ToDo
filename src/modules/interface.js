import { projectsList, flattenProjects } from "..";

const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");
const sidebar = document.querySelector(".sidebar");
const todayView = document.querySelector("#today-view");
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
  tasksDisplay.insertAdjacentHTML("beforeend", html);
}

function getCurrentView() {
  let target;

  target = projectsList.find(
    (project) => project.title === `${event.target.innerHTML}`
  );
  return target;
}

function switchCurrentView() {
  if (
    event.target.closest("#today-view") ||
    event.target.closest("#completed-view")
  ) {
    console.log(event.target);
    console.log(event.target.classList);
    let viewTitle = event.target.closest(".view").id.split("-")[0];
    tasksDisplay.innerHTML = `<h2 class="project-title">${
      viewTitle[0].toUpperCase() + viewTitle.substring(1)
    }</h2>`;
    switchToTodayView();
  } else {
    // const found = projectsList.find(
    //   (project) => project.title === `${event.target.innerHTML}`
    // );
    let target = getCurrentView();
    console.log(event.target);
    console.log(event.target.classList);
    tasksDisplay.innerHTML = `<h2 class="project-title">${target.title}</h2>`;
    target.tasks.forEach((task) => {
      updateTasksUI(task);
    });
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
};

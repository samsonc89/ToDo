import { projectsList } from "..";

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
function updateProjectsList(project) {
  const html = `<div class="project-card" >
    <h3 class="project-title">${project.title}</h3>
    </div>`;

  projectsDisplay.insertAdjacentHTML("beforeend", html);
}

function newProjectView(project) {
  tasksDisplay.innerHTML = "";
  const html = `
  <h2>${project.title}</h2> 
  `;
  tasksDisplay.insertAdjacentHTML("beforeend", html);
}

function switchCurrentView() {
  if (
    event.target.closest("#today-view") ||
    event.target.closest("#completed-view")
  ) {
    let viewTitle = event.target.closest(".view").id.split("-")[0];
    tasksDisplay.innerHTML = `<h2 class="project-title">${
      viewTitle[0].toUpperCase() + viewTitle.substring(1)
    }</h2>`;
  } else {
    const found = projectsList.find(
      (project) => project.title === `${event.target.innerHTML}`
    );
    tasksDisplay.innerHTML = `<h2 class="project-title">${found.title}</h2>`;
    found.checklist.forEach((task) => {
      updateTasksUI(task);
    });
  }
}

todayView.addEventListener("click", switchToTodayView);
function switchToTodayView() {
  console.log("Hello");
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
};

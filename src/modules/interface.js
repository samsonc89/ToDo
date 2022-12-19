const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");
const taskCards = document.getElementsByClassName("task-card");

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
function updateProjectsList(project) {
  const html = `<div class="project-card" >
    <h3 class="project-title">${project.title}</h3>
    </div>`;

  projectsDisplay.insertAdjacentHTML("beforeend", html);
}

function switchProjectView(project) {
  tasksDisplay.innerHTML = "";
  const html = `
  <h2>${project.title}</h2> 
  `;
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

window.addEventListener("click", () => {
  closeCard();
});

export {
  updateTasksUI,
  updateProjectsList,
  checkTask,
  expandCard,
  tasksDisplay,
  switchProjectView,
};

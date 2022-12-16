const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");
const taskCards = document.getElementsByClassName("task-card");

function updateTasksUI(task) {
  const html = `<div class="card task-card" ondblclick="expandCard()" >
  
    <h3 class="task-title"><input type="checkbox" onchange="checkTask(this)">${task.title}</h3>
    <div class='task-details'>
    <p data-placeholder="Notes" contenteditable></p>
    </div>
    </div>`;

  tasksDisplay.insertAdjacentHTML("beforeend", html);
}
function updateProjectsUI(project) {
  const html = `<div class="card project-card" >
    <h3 class="project-title">${project.title}</h3>
    </div>`;

  projectsDisplay.insertAdjacentHTML("beforeend", html);
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
window.addEventListener("click", () => {
  for (let card of taskCards) {
    card.classList.remove("expanded");
    card.classList.add("collapsed");
  }
});

export { updateTasksUI, updateProjectsUI, checkTask, expandCard };

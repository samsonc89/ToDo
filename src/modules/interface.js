const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");
const taskCards = document.getElementsByClassName("task-card");

function updateTasksUI(task) {
  const html = `<div class="card task-card" ondblclick="expandCard()" >
  
    <h3 class="task-title"><input type="checkbox" onchange="checkTask(this)">${task.title}</h3>
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
  event.target.parentElement.classList.toggle("expanded");
}

window.addEventListener("click", () => {
  console.log(taskCards);
  for (let card of taskCards) {
    card.classList.remove("expanded");
  }
});

export { updateTasksUI, updateProjectsUI, checkTask, expandCard };

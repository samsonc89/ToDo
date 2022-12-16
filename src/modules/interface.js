const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");

function updateTasksUI(task) {
  const html = `<div class="card task-card" >
  
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
    console.log(event.target.parentElement.classList.add("done"));
  } else {
    console.log(event.target.parentElement.classList.remove("done"));
  }
}

export { updateTasksUI, updateProjectsUI, checkTask };

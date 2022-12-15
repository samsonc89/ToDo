import { taskList, projectsList } from "../index.js";

const tasksDisplay = document.querySelector(".tasks-display");
const projectsDisplay = document.querySelector(".projects-display");

function updateTasksUI(task) {
  const html = `<div class="card" >
    <h3 class="book-title">${task.title}</h3>
    <p class="">Due: ${task.dueDate}</p>
    <p class="">Notes: ${task.notes}</p>

    </div>`;

  tasksDisplay.insertAdjacentHTML("beforeend", html);
}
function updateProjectsUI(task) {
  const html = `<div class="card" >
    <h3 class="book-title">${task.title}</h3>
    <p class="">Due: ${task.dueDate}</p>
    <p class="">Notes: ${task.notes}</p>


    </div>`;

  projectsDisplay.insertAdjacentHTML("beforeend", html);
}

export { updateTasksUI, updateProjectsUI };

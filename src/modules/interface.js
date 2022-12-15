import { taskList, projectsList } from "../index.js";

const tasksDisplay = document.querySelector(".tasks-display");

function displayTasks() {
  let lastTask = taskList.at(-1);
  const html = `<div class="card" >
    <h3 class="book-title">${lastTask.title}</h3>
    <p class="">Due: ${lastTask.dueDate}</p>
    <p class="">Notes: ${lastTask.notes}</p>
    <p class="">Project: ${lastTask.project}</p>

    </div>`;

  tasksDisplay.insertAdjacentHTML("beforeend", html);
}

export { displayTasks };

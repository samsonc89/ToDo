import { taskList, projectsList } from "../index.js";

const tasksDisplay = document.querySelector(".tasks-display");

function updateTasksUI(task) {
  const html = `<div class="card" >
    <h3 class="book-title">${task.title}</h3>
    <p class="">Due: ${task.dueDate}</p>
    <p class="">Notes: ${task.notes}</p>
    <p class="">Project: ${task.project}</p>

    </div>`;

  tasksDisplay.insertAdjacentHTML("beforeend", html);
}

export { updateTasksUI };

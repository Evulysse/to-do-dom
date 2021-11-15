const todoForm = document.getElementById("todo");

const addTaskBtn = todoForm.querySelector("#addTask");
const removeCompletedTasksBtn = todoForm.querySelector("#removeCompletedTasks");
const removeAllTasksBtn = todoForm.querySelector("#removeAllTasks");

const taskList = document.getElementById("tasks");

function addTask() {
    const taskInput = todoForm.querySelector("#task");

    let task = document.createElement("li");
    task.textContent = taskInput.value;
    
    taskList.appendChild(task);
}

function removeAllCompletedTasks() {
    console.log("Task removed");
}

function removeAllTasks() {
    console.log("All tasks removed!");
}

addTaskBtn.addEventListener("click", addTask);
removeCompletedTasksBtn.addEventListener("click", removeAllCompletedTasks);
removeAllTasksBtn.addEventListener("click", removeAllTasks);
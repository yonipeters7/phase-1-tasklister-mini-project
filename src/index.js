document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    const taskObject = { description: taskDescription };

    buildToDo(taskObject);

    form.reset();
  });
});

function buildToDo(taskObject) {
  const tasksList = document.getElementById("tasks");
  const newTaskItem = document.createElement("li");
  newTaskItem.textContent = taskObject.description;
  tasksList.appendChild(newTaskItem);
}

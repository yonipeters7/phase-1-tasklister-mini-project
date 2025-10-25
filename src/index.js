document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

  const taskDescription = event.target["new-task-description"].value;
  const taskObject = {description: taskDescription};

  buildToDo(taskObject);

  event.target.reset();
  });
});


  function buildToDo(taskObject) {
    const tasksList = document.getElementById("tasks");
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = taskObject.description;
    tasksList.append(newTaskItem);
  }
  